import React from 'react'
import "./Todo.css";

function Todo(props) {
    const { todo } = props;
    console.log(todo);
    return (
        <div onClick={() => {props.toggleCompleted(props.todo.id)}} className={`todo${props.todo.completed ? ' line-through' : ''}`}>
            <h1>{todo.task}</h1>
        </div>
    )
}

export default Todo;
