import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('token');
    navigate('/goodbye');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">CollegeSurvey</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/ask">Ask a Question</Link></li>
        <li><Link to="/my-surveys">My Surveys</Link></li>
      </ul>

      <div className="user-menu">
        <span className="username">Hi, Jaishree</span>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
