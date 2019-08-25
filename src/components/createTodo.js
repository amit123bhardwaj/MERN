import React, { Component } from 'react';

export default class CreateTodo extends Component {
    state={
        description:'',
        responsible:'',
        priority:'',
        completed:false,
    };
    handleSubmit=(e)=>{
        e.preventDefault();

        this.setState({
            description:'',
            responsible:'',
            priority:'',
            completed:false,
        })
    }

    handleDescrition=(e)=>{
         this.setState({description:e.target.value});
    }

    handleResponsible=(e)=>{
        this.setState({responsible:e.target.value});
   }

   handlePriority=(e)=>{
    this.setState({priority:e.target.value});
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
                            onChange={this.handleDescrition}/>
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
            
        </div>
    )
}
}