import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const updateTodo = (index, updatedTodo) => {
    const newTodos = [...todos];
    newTodos[index] = updatedTodo;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter(todo => 
    filter === 'All' || todo.status === filter
  );

  return (
    <div className="App">
      <h1>My Todo</h1>
      <TodoForm addTodo={addTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList 
        todos={filteredTodos} 
        updateTodo={updateTodo} 
        deleteTodo={deleteTodo} 
      />
    </div>
  );
}

export default App;
