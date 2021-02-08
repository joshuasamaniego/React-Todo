import React from 'react';
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = (props) => {
    return (
        <div className="task-container">
            {props.todos.map(todo => {
                return <Todo key ={todo.id} todo={todo} toggleCompleted={props.toggleCompleted}/>
            })}
        </div>
    )
    
}

export default TodoList;
