import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/todos">To Do List</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;