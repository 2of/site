import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // For routing and active link detection
import routes from "../routes"; // Importing routes
import "../styles/nav.scss"; // Import SCSS for styling
import logo from "../res/logo512.png";
import { useGlobalContext } from "../contexts/globalcontext"; // Import global context
import DarkModeToggle from "../components/darkmodetoggle";
import { ContainerNav } from "./containernav";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const { isDarkMode } = useGlobalContext();
  const location = useLocation(); // Detect the current path

  // Get the current route
  const currentRoute = routes.find((route) => route.path === location.pathname);
  const showLinks = currentRoute?.showlinks || false; // Use 'false' as a fallback
  const [mobilemenustate, setmobilemenustate] = useState(false);
  const { isblurPage, setBlurPage } = useGlobalContext(true)


  const handleNavLinkClick = () => { 
   setmobilemenustate((prevState) => !prevState)
    setBlurPage(true);

  }
  const handleMenuOpenclose = () => {

    setmobilemenustate((prevState) => {
      const newState = !prevState; // Compute the new state
      setBlurPage(!newState); // Use the opposite value for blurPage
      return newState;
    });
  };
  return (
    <nav
      className={`nav-container ${isDarkMode ? "dark-mode" : ""} ${
        showLinks ? "" : "mini"
      }`}
    >
      <NavLink to="/" className="nav-logo">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="nav-title">2of.io</h1>
        </NavLink>


     



      {true && (
        <ul className="nav-links">
          {routes.map((route, index) =>
            route.showInNav ? (
              <li
                key={index}
                className={location.pathname === route.path ? "active" : ""}
              >
                <Link to={route.path}>
                  <span
                    className={`prefix ${
                      location.pathname === route.path ? "show" : ""
                    }`}
                  >
                    ./
                  </span>
                  <span className="label">{route.label}</span>
                </Link>
              </li>
            ) : null
          )}
        </ul>
      )}

      <div className="nav-right-container">
        {/* Social Links */}
        <div className="nav-socials">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        {/* Separator */}
        <span className="separator">•</span>

        {/* Dark Mode Toggle */}
        <DarkModeToggle />
      </div>

      <div
        className="hamburger-menu-button"
        onClick={handleMenuOpenclose}
      >
        ./ menu
      </div>

      {mobilemenustate && (
        <div className="expanded-links-for-mobile">
          <ContainerNav
            clickhandler={handleNavLinkClick}
          />

     
        </div>
      )}
    </nav>
  );
};

export default Nav;
