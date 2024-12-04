import React from "react";
import { Link } from "react-router-dom"; // For routing
import routes from "../routes"; // Importing routes
import '../styles/nav.scss' // Import SCSS for styling
import logo from "../res/logo512.png"
const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="nav-title">My Website</h1>
      </div>

      <ul className="nav-links">
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.label}</Link>
          </li>
        ))}
      </ul>

      <div className="nav-socials">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
          blah
        </a>
      </div>
    </nav>
  );
};

export default Nav;