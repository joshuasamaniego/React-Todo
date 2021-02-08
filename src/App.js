import React from 'react';
import ParticleComponent from "./ParticleComponent";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "./App.css";

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
        },
        {
          task: 'Style This App',
          id: 1528817082319,
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

  clearCompleted = () => {
    let filtered = this.state.todos.filter(todo => todo.completed !== true);
    console.log(filtered);
    this.setState({
      todos: filtered,
    })
  }

  render() {
    console.log(this.state.todos);
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        className="App"
      >
        <ParticleComponent />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          className="todo-container"
        >
          <h1 className="title">Welcome to your Todo App!</h1>
          <TodoForm addTodo={this.addTodo} todos={this.state.todos} clearCompleted={this.clearCompleted}/>
          <div className="task-container">
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
