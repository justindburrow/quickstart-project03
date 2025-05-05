import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import TodosView from './views/TodosView';
import ContactView from './views/ContactView';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Navbar />
      <Routes>
        {/* Redirect the root path `/` to `/todos` */}
        <Route path="/" element={<Navigate to="/todos" />} />
        <Route
          path="/todos"
          element={
            <TodosView
              todos={todos}
              addTodo={addTodo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          }
        />
        <Route path="/contact" element={<ContactView />} />
      </Routes>
    </div>
  );
};

export default App;