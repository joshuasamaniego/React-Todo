import React from 'react'
import "./Todo.css";

function Todo(props) {
    const { todo } = props;
    console.log(todo);
    return (
        <div className="todo-task-container">
            <div onClick={() => {props.toggleCompleted(props.todo.id)}} className={`todo${props.todo.completed ? ' line-through' : ''}`}>
                <h1 className="task">{todo.task}</h1>
            </div>
        </div>
    )
}

export default Todo;
