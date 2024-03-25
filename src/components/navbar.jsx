// Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-xl font-bold">My Bookstore</NavLink>
        <ul className="flex space-x-4">
          <li><NavLink to="/" activeClassName="text-yellow-400">Home</NavLink></li>
          <li><NavLink to="/listed-books" activeClassName="text-yellow-400">Listed Books</NavLink></li>
          <li><NavLink to="/pages-to-read" activeClassName="text-yellow-400">Pages to Read</NavLink></li>
        </ul>
        <div>
          <button className="mr-2">Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
