import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import  CreateTodo from './components/createTodo';
import  EditTodo from './components/editTodo';
import  TodosList from './components/todosList';
class App extends Component {
      render(){
      return (
      <Router>
      <div className="container">
        <h2> A TODO APP </h2>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar navbar-brand" 
          href="https://images.unsplash.com/photo-1566655702034-02f305cb3a28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          target="_blank">
          <img src="https://images.unsplash.com/photo-1566655702034-02f305cb3a28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          width="30px" height="30px"></img> 
          </a>
          <Link to="/" className="navbar navbar-brand">Todo List</Link>
          <div className="collapse navbar-collapse" >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link" href="#">Todos </Link>
                </li>
                <li className="nav-item ">
                <Link to="/create" className="nav-link" href="#">CreateTodo </Link>
                </li>
              </ul>
          </div>
      </nav>
      <Route path="/" exact  component={TodosList} />
      <Route path="/edit/:id" exact component={EditTodo} />
      <Route path="/create" exact component={CreateTodo} />
      </div>
      </Router>
      );
}
}

export default App;
