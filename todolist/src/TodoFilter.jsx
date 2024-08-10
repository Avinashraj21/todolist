import React from 'react';

function TodoFilter({ filter, setFilter }) {
  return (
    <div className="todo-filter">
      <label>Status Filter:</label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Not Completed">Not Completed</option>
      </select>
    </div>
  );
}

export default TodoFilter;
