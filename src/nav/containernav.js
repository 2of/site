import React from "react";
import routes from "../routes";
import { NavLink } from "react-router-dom";
import styles from "./containernav.module.scss"; // Importing the CSS Module

export const ContainerNav = ({ cardtype = "", clickhandler, animateappear=true }) => (
  <div className={styles.links}>
    <ul>
      {routes.map(
        (route, index) =>
          route.showInNav && (
            <li
              key={index}
              className={animateappear ? styles["animate-in"] : ""} // Apply animation class if animateappear is true
            >
              <NavLink
                to={route.path}
                activeClassName={styles["active-link"]} // Use the module's active class
                exact // Ensure the link is only active when exactly matching the path
                onClick={() => clickhandler && clickhandler()} // Call the clickhandler when the link is clicked
              >
                {route.label}
              </NavLink>
            </li>
          )
      )}
    </ul>
  </div>
);