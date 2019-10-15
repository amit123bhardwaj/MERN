import React,{ Component } from 'react';
import {Table} from 'antd'; 

class TodosList extends Component {
    render(){
        const {todos} = this.props;
        console.log('todos inside todoList', todos);
        const data=todos && todos.filter(item=> item && item.todo_description );
        console.log('data', data);
        const  columns=[
                {title:'first', dataIndex:'first', key:'first'},
                {title:'second', dataIndex:'second', key:'second'},
                {title:'third', dataIndex:'third', key:'third'},
                {title:'fourth', dataIndex:'fourth', key:'fourth'},
              ];
        return(
            <div style={{minWidth:"500px"}}>
                <p> Todo list Component</p>
                <table minWidth="100%">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            {/* <th>completed</th> */}
                        </tr>
                    </thead>
                    {todos && todos.map(item=>
                        <tr>
                            <td>{item.todo_description}</td>
                            <td>{item.todo_responsible}</td>
                            <td>{item.todo_priority}</td>
                            {/* <td>{item.todo_completed}</td> */}
                        </tr>
                    )}
                </table>
            </div>
        )
    }
}
export default TodosList;