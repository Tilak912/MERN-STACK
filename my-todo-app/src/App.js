import React, { Component } from 'react';
import Todos from './todos.js';
import AddTodo from './AddTodo';

class App extends Component {

  state = {
    todos : [
      {content : "Play with code." ,id : 1},
      {content : "Play pubg" ,id : 2},
      {content : "Play pubg again" , id : 3}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random()*100;
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">MY TODO'S LIST!</h1>
        <Todos todos = {this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
