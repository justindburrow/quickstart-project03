import React, { useState } from 'react';

const Todos = ({ todos, addTodo, toggleTodo, deleteTodo, setFilter }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div className="todos">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a To Do"
        />
        <button type="submit">Add</button>
      </form>
      <p className="instructions">Click the item when completed.</p>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.originalIndex}
            className={todo.completed ? 'completed' : ''}
            onClick={() => toggleTodo(todo.originalIndex)} // Use the original index
          >
            <span>{todo.text}</span>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevents the list item click from toggling the state
                deleteTodo(todo.originalIndex); // Use the original index
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="filters">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incomplete')}>Incomplete</button>
      </div>
    </div>
  );
};

export default Todos;