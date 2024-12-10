import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../../contexts/globalcontext";
import styles from "./DarkModeToggle.module.scss"; // Scoped styles

import buoy from "../../res/buoy.png";



export const DarkModeToggleCell = () => {
  const { isDarkMode, toggleTheme } = useGlobalContext();
  const [animating, setAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle theme toggle animations
  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => setAnimating(false), 3000);
    return () => clearTimeout(timer);
  }, [isDarkMode]);

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate transform for parallax elements
  const getTransform = (isReflection = false) => {
    const range = 8; // Pixel movement range
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = ((mousePosition.x - centerX) / centerX) * range * 2;
    const offsetY = ((mousePosition.y - centerY) / centerY) * range;

    // Flip the reflection vertically
    if (isReflection) {
      return `translate(${offsetX}px, ${-offsetY}px) scaleY(-1)`;
    }

    return `translate(${offsetX}px, ${offsetY}px)`;
  };

  return (
    <div
      className={` ${styles.darkModeToggle} ${
        isDarkMode ? styles.dark : styles.light
      }`}
      onClick={toggleTheme}
    >
      <div className={styles.content}>
        <div className={styles.moonAndStars}>
          {isDarkMode ? (
            <div
              className={`${styles.moon} ${
                animating ? styles.animateMoon : ""
              }`}
              style={{ transform: getTransform() }}
            ></div>
          ) : (
            <div
              className={`${styles.sun} ${animating ? styles.animateSun : ""}`}
              style={{ transform: getTransform() }}
            ></div>
          )}
          <div className={styles.stars}></div>
        </div>
      </div>

      {isDarkMode && (
    <div className={styles.buoy}  >
      <img src={buoy} alt="Buoy" />
    </div>
  )}
      <div className={styles.hill}>
      
        {isDarkMode && (
          <div
            className={`${styles.moonReflection} ${
              animating ? styles.animateMoon : ""
            }`}
            style={{ transform: getTransform(true) }}
          ></div>
        )}
    
      </div>
    </div>
  );
};
