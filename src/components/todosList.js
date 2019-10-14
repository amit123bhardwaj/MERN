import React,{ Component } from 'react';
import {Table} from 'antd'; 

class TodosList extends Component {
    render(){
        const {todos} = this.props;
        const data=todos;
        const  columns=[
                {title:'first', dataIndex:'first', key:'first'},
                {title:'second', dataIndex:'second', key:'second'},
                {title:'third', dataIndex:'third', key:'third'},
                {title:'fourth', dataIndex:'fourth', key:'fourth'},
              ];
        return(
            <div style={{minWidth:"500px"}}>
                <p> Todo list Component</p>
                <Table 
                 style={{width:'100%'}}
                 dataSource={data} 
                 columns={columns}
                 ></Table>
            </div>
        )
    }
}
export default TodosList;