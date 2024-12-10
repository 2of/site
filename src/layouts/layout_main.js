import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // Import Transition Components
import Nav from "../nav/nav";
import routes from "../routes";
import styles from "../styles/LayoutMain.module.scss";

const LayoutMain = () => {
  const location = useLocation(); // Get the current location (route) from React Router
  const currentRoute = routes.find((route) => route.path === location.pathname);
  const showLinks = currentRoute?.showlinks || false; // Check if links are to be shown

  return (
    <div className={styles.layoutMain}>
      {/* Navigation Area */}
      {showLinks && (
        <div className={styles.navArea}>
          <Nav />
        </div>
      )}
      {/* Page Transition Area */}
      <TransitionGroup>
        <CSSTransition
          key={location.key} // Use location key to trigger a new transition on route change
          timeout={300} // Duration of the transition
          classNames="pageTransition" // CSS class that controls the transition styles
        >
          <div
            className={`${styles.pageContainer} ${
              showLinks ? styles.withPadding : ""
            }`}
          >
            <Outlet />
          </div>
        </CSSTransition>
      </TransitionGroup>
      {/* <a href="https://www.flaticon.com/free-icons/buoy" title="buoy icons">Buoy icons created by Freepik - Flaticon</a> */}
    </div>
    
  );
};

export default LayoutMain;