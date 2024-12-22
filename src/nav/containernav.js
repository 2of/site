import React from "react";
import routes from "../routes";
import { NavLink } from "react-router-dom";
import styles from "./containernav.module.scss"; // Importing the CSS Module
import useDeviceType from "../tools/DeviceType"; // Example hook
import useScreenSize from "../tools/screensize";
import clsx from "clsx";
import { PageTransitionViewforTikTokPage } from "../components/PageTransitionMaskTikTokView";

export const ContainerNav = ({ cardtype = "", clickhandler, animateappear = true }) => {
  // Using a hook
  const deviceType = useDeviceType(); // Replace `useDeviceType` with your actual hook
  const size = useScreenSize()
  return (
<div className={clsx(styles.links, size === "sm" ? styles.small : styles.large)}>
<PageTransitionViewforTikTokPage where="top" kind="black"/>

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
                  className={({ isActive }) => (isActive ? styles["active-link"] : "")} // Use the module's active class
                  exact="true" // Ensure the link is only active when exactly matching the path
                  onClick={() => clickhandler && clickhandler()} // Call the clickhandler when the link is clicked
                >
                  {route.label}
                </NavLink>
              </li>
            )
        )}
      </ul>
      {/* <p>Device Type: {size}</p> Example usage of the hook */}
    </div>
  );
};