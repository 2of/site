import React from "react";
import routes from "../routes";
import { NavLink } from "react-router-dom";
import styles from "./containernav.module.scss"; // Importing the CSS Module

export const ContainerNav = ({ cardtype = "" }) => (
  <div className={styles.links}>
    <ul>
      {routes.map(
        (route, index) =>
          route.showInNav && (
            <li key={index}>
              <NavLink
                to={route.path}
                activeClassName={styles["active-link"]} // Use the module's active class
                exact // Ensure the link is only active when exactly matching the path
              >
                {route.label}
              </NavLink>
            </li>
          )
      )}
    </ul>
  </div>
);