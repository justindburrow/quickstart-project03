import React, { useState } from 'react';
import Todos from '../components/Todos';

const TodosView = ({ todos, addTodo, toggleTodo, deleteTodo }) => {
  const [filter, setFilter] = useState('all');

  const filteredTodos = todos
    .map((todo, index) => ({ ...todo, originalIndex: index })) // Include the original index
    .filter((todo) => {
      if (filter === 'completed') return todo.completed;
      if (filter === 'incomplete') return !todo.completed;
      return true;
    });

  return (
    <div>
      <Todos
        todos={filteredTodos}
        addTodo={addTodo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        setFilter={setFilter}
      />
    </div>
  );
};

export default TodosView;