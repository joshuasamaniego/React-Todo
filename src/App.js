import React from 'react';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    // you will need a place to store your state in this component.
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state.

  addTodo = (updatedTodos) => {
    this.setState({
      todos: updatedTodos
    })
  }

  toggleCompleted = (todoId) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === todoId) {
          return({
            ...todo, 
            completed: !todo.completed
          })
        } else {
          return todo;
        }
      })
    })
  }

  clearCompleted = (event) => {
    event.preventDefault();
    let filtered = this.state.todos.filter(todo => todo.completed !== true);
    console.log(filtered);
    this.setState({
      todos: filtered,
    })
  }

  render() {
    console.log(this.state.todos);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        <TodoForm addTodo={this.addTodo} todos={this.state.todos} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
