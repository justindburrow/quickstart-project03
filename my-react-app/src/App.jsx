import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TodosView from './views/TodosView';
import ContactView from './views/ContactView';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [currentView, setCurrentView] = useState('todos'); 
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
      {/* Pass setCurrentView to Navbar to handle navigation */}
      <Navbar setCurrentView={setCurrentView} />
      {currentView === 'todos' && (
        <TodosView
          todos={todos}
          addTodo={addTodo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      )}
      {currentView === 'contact' && <ContactView />}
    </div>
  );
};

export default App;