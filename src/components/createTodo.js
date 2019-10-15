import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import TodosList from './todosList';
export default class CreateTodo extends Component {
    state={
        description:'',
        responsible:'',
        priority:'',
        completed:false,
        todos:[],
        images:[],
        currentFile:undefined,
    };

    componentDidMount(){
        axios.get('http://localhost:4000/todos/').then(resp=>{
        this.setState({
            todos:resp.data,
        });
        console.log('todos', this.state.todos);
        console.log('resp', resp);
        console.log('resp.data', resp.data);
        }).catch(function(err){
          console.log(err);
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        
        const newTodo = {
            todo_description: this.state.description,
            todo_responsible: this.state.responsible,
            todo_priority: this.state.priority,
            todo_completed: this.state.completed,
        }
        const files=this.state.images;
        axios.post('http://localhost:4000/todos/add',newTodo,files)
             .then(resp=>{
            //    console.log(resp.data);
            })
        this.setState({
            description:'',
            responsible:'',
            priority:'',
            completed:false,
        })
    }

    handleDescription=(e)=>{
         this.setState({description:e.target.value});
    }

    handleResponsible=(e)=>{
        this.setState({responsible:e.target.value});
   }

   handlePriority=(e)=>{
    this.setState({priority:e.target.value});
   }
   handleFileChange=(e)=>{
    this.setState({currentFile:e.target.files[0]});
   }


render(){
    return (
        <div style={{marginTop:20}}> 
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" 
                            className="form-control"
                            value={this.state.description} 
                            onChange={this.handleDescription}/>
                </div>
                <div>
                    <label>Responsible</label>
                    <input type="text" 
                            className="form-control"
                            value={this.state.responsible} 
                            onChange={this.handleResponsible}/>
                </div>
                <div className="form-group mr-auto ml-auto">
                    <div className="form-check form-check-inline">
                       <input type="radio"
                              priorityOptions="low"
                              value="low"
                              checked={this.state.priority==="low"}
                              onChange={this.handlePriority}/>
                        <label className="form-check-label ">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                       <input type="radio"
                              priorityOptions="low"
                              value="medium"
                              checked={this.state.priority==="medium"}
                              onChange={this.handlePriority}/>
                        <label className="form-check-label ">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                       <input type="radio"
                              priorityOptions="low"
                              value="high"
                              checked={this.state.priority==="high"}
                              onChange={this.handlePriority}/>
                        <label className="form-check-label ">High</label>
                    </div>
                </div>
                <div className="form-group">
                  <input type="submit" value="Submit" className="btn btn-primary" />
                </div>
            </form>
            {/* <input type="file" value={this.state.currentFile} onChange={this.handleFileChange}>Choose file</input> */}
            <TodosList todos={this.state.todos}/>

        </div>
    )
}
}