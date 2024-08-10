import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, updateTodo, deleteTodo }) {
  return (
    <div>
      <h2>My Todos</h2>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <TodoItem 
            key={index} 
            index={index} 
            todo={todo} 
            updateTodo={updateTodo} 
            deleteTodo={deleteTodo} 
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
