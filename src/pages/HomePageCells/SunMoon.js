import React, { useEffect, useRef, useState } from 'react';
import styles from './DarkModeToggle.module.scss';

const SunMoon = ({ isDarkMode, animating }) => {
  const [transform, setTransform] = useState("translate(0px, 0px)"); // State for transform style
  const mousePosition = useRef({ x: 0, y: 0 });

  // Track mouse movement for parallax effect (without causing re-render)
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      updateTransform(); // Call updateTransform on mouse move
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate transform for parallax elements
  const updateTransform = () => {
    const range = 8; // Pixel movement range
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const offsetX = ((mousePosition.current.x - centerX) / centerX) * range * 2;
    const offsetY = ((mousePosition.current.y - centerY) / centerY) * range;

    // Update the state to trigger re-render with the new transform
    setTransform(`translate(${offsetX}px, ${offsetY}px)`);
  };

  return (
    <div className={styles.moonAndStars}>
      {isDarkMode ? (
        <>
          <div
            className={`${styles.moon} ${animating ? styles.animateMoon : ''}`}
            style={{
              transform: transform, // Apply transform dynamically
            }}
          ></div>
          
          {/* Reflection of the moon */}
          <div
            className={`${styles.moonReflection} ${animating ? styles.animateMoon : ''}`}
            style={{
              transform: `${transform} scaleY(-1)`, // Reflection will also follow the cursor
            }}
          ></div>
        </>
      ) : (
        <div
          className={`${styles.sun} ${animating ? styles.animateSun : ''}`}
          style={{
            transform: transform, // Apply transform dynamically
          }}
        ></div>
      )}
    </div>
  );
};

export default SunMoon;