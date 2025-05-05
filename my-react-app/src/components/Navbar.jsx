import React from 'react';

const Navbar = ({ setCurrentView }) => {
  return (
    <nav className="navbar">
      <button onClick={() => setCurrentView('todos')}>To Do List</button>
      <button onClick={() => setCurrentView('contact')}>Contact</button>
    </nav>
  );
};

export default Navbar;