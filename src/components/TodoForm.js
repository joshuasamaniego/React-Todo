import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
          newTask: "",
        }
      }

    handleChanges = (event) => {
        this.setState({
            newTask: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newTodo = {
            task: this.state.newTask,
            id: Date.now(),
            complete: false
        }
        const updatedTodos = [...this.props.todos, newTodo]
        this.props.addTodo(updatedTodos);
        this.setState({
            newTask: "",
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        name="item" 
                        value={this.state.newTask} 
                        onChange={this.handleChanges}/>
                    <button 
                        onClick={this.handleSubmit}
                    >
                        Add New Todo
                    </button>
                    <button 
                        onClick={() => this.props.clearCompleted}
                    >
                        Clear Completed
                    </button>
                </form>
            </div>
        )
    }
}
