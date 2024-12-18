import React, { useState,useRef, useEffect } from "react";

import styles from "./spotlight.module.scss";




const Light = ({ followMouse, animate, random = true }) => {
  const lightRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);
  const [randomDelay, setRandomDelay] = useState(0);
  const [randomSpeed, setRandomSpeed] = useState(0);

  useEffect(() => {
    if (random) {
      // Generate random delay (in ms) between 0s to 2s and random speed between 0.5s to 2s
      setRandomDelay(Math.random() * 2000); // Random delay between 0 to 2 seconds
      setRandomSpeed(10 + Math.random() * 30); // Random speed between 0.5s to 2s
    }
  }, [random]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setCursorPosition({ x: clientX, y: clientY });
    };

    if (followMouse) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (followMouse) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [followMouse]);

  useEffect(() => {
    const friction = 0.1;

    const calculateAngle = () => {
      if (lightRef.current && cursorPosition) {
        const { x, y } = cursorPosition;
        const rect = lightRef.current.getBoundingClientRect();
        const lampCenterX = rect.left + rect.width / 2;
        const lampCenterY = rect.top + rect.height;

        const targetAngle = Math.atan2(y - lampCenterY, x - lampCenterX) * (180 / Math.PI);
        const currentAngle = angle;
        const newAngle = currentAngle + (targetAngle - currentAngle) * friction;

        setAngle(newAngle);
      }
    };

    if (followMouse) {
      const animationFrame = requestAnimationFrame(calculateAngle);

      if (lightRef.current) {
        lightRef.current.style.transform = `translateX(-50%) rotate(${angle + 90}deg)`;
      }

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [cursorPosition, angle, followMouse]);

  return (
    <div className={styles.spotlightContainer}>
      <div className={styles.base}></div>

      <div
        className={`${styles.spotlightLight} ${animate ? styles.animateSpotlight : ''}`}
        style={{
        //   animationDelay: `${randomDelay}ms`, // Apply random delay
          animationDuration: `${randomSpeed}s`, // Apply random speed
        }}
      ></div>
    </div>
  );
};

export default Light;