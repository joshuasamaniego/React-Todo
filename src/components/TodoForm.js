import React, { Component } from 'react'
import "./TodoForm.css";

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

    handleSubmitAdd = (event) => {
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

    handleSubmitClear = (event) => {
        event.preventDefault();
        this.props.clearCompleted();
    }

    render() {
        return (
            <div className="form-container">
                <form>
                    <input 
                        type="text" 
                        name="item" 
                        placeholder="Add a New Task"
                        value={this.state.newTask} 
                        onChange={this.handleChanges}
                        className="input-field"
                    />
                    <hr /> 
                    <div className="button-container">
                        <button 
                            onClick={this.handleSubmitAdd}
                            className="form-button"
                        >
                            Add New Todo
                        </button>
                        <br />
                        <button 
                            onClick={this.handleSubmitClear}
                            className="form-button"
                        >
                            Clear Completed
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
