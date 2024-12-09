import React from "react";
import { Link, useLocation } from "react-router-dom"; // For routing and active link detection
import routes from "../routes"; // Importing routes
import "../styles/nav.scss"; // Import SCSS for styling
import logo from "../res/logo512.png";
import { useGlobalContext } from "../contexts/globalcontext"; // Import global context
import DarkModeToggle from "../components/darkmodetoggle";

const Nav = () => {
  const { isDarkMode, toggleTheme } = useGlobalContext();
  const location = useLocation(); // Detect the current path

  // Get the current route
  const currentRoute = routes.find((route) => route.path === location.pathname);
  const showLinks = currentRoute?.showlinks || false; // Use 'false' as a fallback

  return (
    <nav
      className={`nav-container card ${isDarkMode ? "dark-mode" : ""} ${
        showLinks ? "" : "mini"
      }`}
    >
      <div className="nav-logo">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="nav-title">2of</h1>
      </div>

      {true && (
        <ul className="nav-links">
          {routes.map(
            (route, index) =>
              true && ( // not needed
                <li
                  key={index}
                  className={location.pathname === route.path ? "active" : ""}
                >
                  <Link to={route.path}>{route.label}</Link>
                </li>
              )
          )}
        </ul>
      )}

      <div className="nav-socials">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>

      <DarkModeToggle />
    </nav>
  );
};

export default Nav;
