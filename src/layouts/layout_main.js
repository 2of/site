import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // Import Transition Components
import Nav from "../nav/nav";

const LayoutMain = () => {
  const location = useLocation(); // Get the current location (route) from React Router

  return (
    <>
      <Nav />
      {/* This is where child route components will be rendered */}
      <TransitionGroup>
        <CSSTransition
          key={location.key} // Use location key to trigger a new transition on route change
          timeout={300} // Duration of the transition
          classNames="page-transition" // CSS class that controls the transition styles
        >
          <div className="page-container">
            <Outlet />
          </div>
        </CSSTransition>
      </TransitionGroup>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 2of.io. All Rights Reserved.</p>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LayoutMain;