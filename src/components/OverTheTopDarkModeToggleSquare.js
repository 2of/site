import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import styles from "./OverTheTopDarkModeToggleSquare.module.scss";
import { useGlobalContext } from "../contexts/globalcontext";
import Light from "./Miscellaneous/spotlight";
import Crowd from "./Miscellaneous/crowd";
import { FaExchangeAlt, FaMoon, FaSun } from "react-icons/fa";

export const OverTheTopDarkmodeToggle = () => {
  const { isDarkMode, toggleTheme } = useGlobalContext();
  const [localstate, setLocalstate] = useState(isDarkMode);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animdir, setAnimdir] = useState("none");
  const [isMouseOver, setIsMouseOver] = useState(false); // State to track mouse hover

  useEffect(() => {
    if (localstate !== isDarkMode) {
      // Determine animation direction
      if (localstate && !isDarkMode) {
        setAnimdir("dtol"); // Dark to Light
      } else if (!localstate && isDarkMode) {
        setAnimdir("ltod"); // Light to Dark
      }

      // Start animation
      setIsAnimating(true);

      // Stop animation after the duration
      const animationDuration = 500; // 2s duration for the animation
      const timer = setTimeout(() => {
        setIsAnimating(false); // Stop animation
        setLocalstate(isDarkMode); // Sync localstate after animation
        setAnimdir("none"); // Reset animation direction
      }, animationDuration);

      return () => clearTimeout(timer); // Cleanup on unmount or state change
    }
  }, [isDarkMode, localstate]);

  const handleClick = () => {
    if (animdir === "none") {
      toggleTheme();
    }
  };

  const handleMouseEnter = () => setIsMouseOver(true); // Mouse enters the container
  const handleMouseLeave = () => setIsMouseOver(false); // Mouse leaves the container

  return (
    <>
      <div
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={clsx(
          styles.container,
          { [styles.day]: !isDarkMode }, // Add dark mode class if active
          { [styles.night]: isDarkMode }
        )}
      >
        <div
          className={clsx(styles.prompt, { [styles.showPrompt]: isMouseOver })}
        >
          <h2> <FaMoon/> <FaExchangeAlt/> <FaSun/> </h2>
        </div>

     

        <div className={clsx(styles.sky, { [styles.animateSky]: isAnimating })}>
          <div
            className={clsx(styles.sun, {
              [styles.animateSunEnter]: animdir === "dtol", // Apply enter animation for sun when ltod
              [styles.animateSunExit]: animdir === "ltod", // Apply exit animation for sun when dtol
              [styles.hidden]: animdir === "none" && localstate === true,
            })}
          ></div>
          <div
            className={clsx(styles.stars, {
              [styles.animateStandardEnter]: animdir === "ltod",
              [styles.animateStandardExit]: animdir === "dtol", // Apply exit animation for sun when dtol
              [styles.hidden]: animdir === "none" && localstate === false,
            })}
          >
            t
          </div>
          
          <div
            className={clsx(styles.moon, {
              [styles.animateMoonEnter]: animdir === "ltod",
              [styles.animateMoonExit]: animdir === "dtol", // Apply exit animation for sun when dtol
              [styles.hidden]: animdir === "none" && localstate === false,
            })}
          ></div>
        </div>

        <div className={styles.land}>
            
          <div
            className={clsx(styles.CrowdContainer, {
              [styles.animateStandardEnter]: animdir === "ltod",
              [styles.animateStandardExit]: animdir === "dtol", // Apply exit animation for sun when dtol
              [styles.hidden]: animdir === "none" && localstate === false,
            })}
          >
            {/* <Crowd/> */}
          </div>
          
          <div
            className={clsx(styles.spotlights, {
              [styles.animateStandardEnter]: animdir === "ltod",
              [styles.animateStandardExit]: animdir === "dtol", // Apply exit animation for sun when dtol
              [styles.hidden]: animdir === "none" && localstate === false,
            })}
          >
            <Light followMouse={false} animate={true} random={true} />
            <Light followMouse={false} animate={true} random={true} />
            <Light followMouse={false} animate={true} random={true} />
            <Light followMouse={false} animate={true} random={true} />
          </div>

          <div className={styles.water} />
        </div>
      </div>
    </>
  );
};
