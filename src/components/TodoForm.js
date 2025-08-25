import React, { useState } from "react";

function TodoForm({ onAddTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            onAddTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a new todo"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm;