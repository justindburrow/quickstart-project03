import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TodosView from './views/TodosView';
import ContactView from './views/ContactView';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Navbar />
      <Routes>
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