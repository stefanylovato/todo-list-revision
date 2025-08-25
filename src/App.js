import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import './App.css';
//import './App.scss';

function App() {
  const [todos, setTodos] = useState([]); //inicializa sem dados
  const [filter, setFilter] = useState('all'); //estado inicial filtro
  //variável de estado (filter) e função de atualização (setFilter)


const addTodo = (text) => {
  setTodos([...todos, { id: Date.now(), text, completed: false }]);
};

const toggleTodo = (id) => {
  setTodos(todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  ));
};

const filteredTodos = todos.filter(todo => 
  filter === 'all' ? true : filter === 'completed' ? todo.completed : !todo.completed
);

return (
  <div className="App">
    <h1>To-Do List </h1>
    <TodoForm onAddTodo={addTodo} />
    <div role="filter">
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={() => setFilter('active')}>Active</button>
    </div>
    <ul>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
      ))}
    </ul>
  </div>
);
}

export default App;