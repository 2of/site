import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import styles from "./OverTheTopDarkModeToggleSquare.module.scss";
import { useGlobalContext } from "../contexts/globalcontext";
import Light from "./Miscellaneous/spotlight";
import Crowd from "./Miscellaneous/crowd";
import { FaExchangeAlt, FaMoon, FaSun } from "react-icons/fa";
import useDeviceType from "../tools/DeviceType";

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
  const devicetype = useDeviceType()


  const [clouds, setClouds] = useState([]);


  useEffect(() => {
    // Create 5 initial clouds with random delays, speeds, heights, and top positions
    const initialClouds = Array.from({ length: 5 }, () => {
      const randomSpeed = Math.random() * 5 + 5; // Random speed between 5s and 10s
      const randomHeight = Math.random() * 30 + 150; // Random height between 30px and 60px
      const randomTop = Math.random() * 50; // Random top position between 0% and 50%
      const randomDelay = Math.random() * 2; // Random delay between 0s and 2s

      return {
        id: Date.now() + Math.random(), // Unique id for each cloud (ensures uniqueness even on re-render)
        speed: randomSpeed,
        height: randomHeight,
        top: randomTop,
        delay: randomDelay, // Random delay for each cloud
      };
    });

    setClouds(initialClouds);

    // Add new clouds every 2 seconds (this part remains as before)
    const intervalId = setInterval(() => {
      const randomSpeed = Math.random() * 5 + 5;
      const randomHeight = Math.random() * 30 + 30;
      const randomTop = Math.random() * 50;
      const randomDelay = Math.random() * 2;

      setClouds((prevClouds) => [
        ...prevClouds,
        {
          id: Date.now() + Math.random(),
          speed: randomSpeed,
          height: randomHeight,
          top: randomTop,
          delay: randomDelay,
        },
      ]);
    }, 5000); // Add new cloud every 2 seconds

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);


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

{devicetype === "mobile" && (
        <div
          className={clsx(styles.prompt_mobile)}
        >
          <h2> <FaMoon/> <FaExchangeAlt/> <FaSun/> </h2>
        </div>)}

        {devicetype === "desktop" && (
        <div
          className={clsx(styles.prompt, { [styles.showPrompt]: isMouseOver })}
        >
          <h2> <FaMoon/> <FaExchangeAlt/> <FaSun/> </h2>
        </div>)}

        <div className={clsx(styles.sky, { [styles.animateSky]: isAnimating })}>


        <div
            className={clsx(styles.clouds, {
              [styles.animateStandardEnter]: animdir === "dtol", // Apply enter animation for sun when ltod
              [styles.animateStandardExit]: animdir === "ltod", // Apply exit animation for sun when dtol
              [styles.hidden]: animdir === "none" && localstate === true,
            })}
          >
         {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className={clsx(styles.cloud, styles.move)}
          style={{
            animationDuration: `${cloud.speed}s`, // Set random speed for each cloud
            height: `${cloud.height}px`, // Set random height for each cloud
            top: `${cloud.top}%`, // Set random top position for each cloud
          }}
        />
      ))}
        
          </div>
          
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
