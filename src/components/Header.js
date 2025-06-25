import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../dudigital.png"
const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
        <h3>LABR2Q95: Multimedia Project</h3>
        </div>
        <div className="menu-icon" onClick={toggleSidebar}>
          &#9776;
        </div>
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About Us</Link>
         
        </nav>
      </header>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <Link to="/" onClick={toggleSidebar}>Home</Link>
        <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
        <Link to="/about" onClick={toggleSidebar}>About Us</Link>
    
      </div>
      <div className={`backdrop ${sidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}></div>
    </>
  );
};

export default Header;
