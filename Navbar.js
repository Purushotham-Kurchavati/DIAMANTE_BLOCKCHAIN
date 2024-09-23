import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Crowdfunding Platform</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create Campaign</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
