import React from "react";
import { useGlobalContext } from "../contexts/globalcontext";
import { NavLink } from "react-router-dom";  // Import NavLink from react-router-dom
import routes from "../routes";  // Importing routes from your routes.js
import styles from "./DirPage.module.scss";  // Importing the SCSS module

export const DirPage = () => {
  const { basename } = useGlobalContext(); // Access basename from GlobalContext

  return (
    <div className="StandardPageContainer">
      <div className={styles.phonebookContainer}>
        <h1>./directory</h1>
        <h2>I keep a lot of junk on this page so, hey, a handy dir for forgetting the paths</h2>

        <h3>A lot of these are just rough tools that I needed to host somewhere, expect no quality</h3>
        <div className={styles.phonebook}>
          {routes
            .map((route, index) => (
              <div key={index} className={styles.phonebookCard}>
                <h2>{route.label}</h2>
                <p>Path: {route.path}</p>
                {/* Replace <a> with <NavLink> */}
                <NavLink 
                  to={`${basename}${route.path}`} 
                  className={styles.phonebookLink} 
                  activeClassName={styles.activeLink} // Optionally apply a class when active
                >
                  Go to {route.label}
                </NavLink>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};