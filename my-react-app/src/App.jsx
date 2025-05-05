import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TodosView from './views/TodosView';
import ContactView from './views/ContactView';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/todos" element={<TodosView />} />
        <Route path="/contact" element={<ContactView />} />
      </Routes>
    </div>
  );
};

export default App;