import React, { useState } from 'react';

function TodoItem({ index, todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(todo.name);
  const [description, setDescription] = useState(todo.description);
  const [status, setStatus] = useState(todo.status);

  const handleSave = () => {
    updateTodo(index, { name, description, status });
    setIsEditing(false);
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    updateTodo(index, { name, description, status: newStatus });
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>Name: {todo.name}</p>
          <p>Description: {todo.description}</p>
          <select value={status} onChange={handleStatusChange}>
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
