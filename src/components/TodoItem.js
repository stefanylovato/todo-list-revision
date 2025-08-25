import React from "react";

function TodoItem({ todo, onToggle }) {
    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            />
            {todo.text}
        </li>
    );
}

export default TodoItem;