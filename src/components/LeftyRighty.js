import React, { useRef, useState } from 'react';
import styles from './LeftyRighty.module.scss'; // Import your updated SCSS styles

const LeftyRighty = ({ leftComponent, rightComponent }) => {
  const containerRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState('right'); // Keep track of scroll direction

  const handleScroll = () => {
    const container = containerRef.current;
    const scrollAmount = container.clientWidth; // Get the width of the container

    if (scrollDirection === 'right') {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setScrollDirection('left'); // Switch to the left direction after scrolling right
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setScrollDirection('right'); // Switch to the right direction after scrolling left
    }
  };

  return (
    <div className={styles.scrollerContainer}>
      <button
        className={styles.scrollButton}
        onClick={handleScroll}
      >
        {/* Use &#10094; for the left arrow and apply transform based on direction */}
        <span
          className={styles.scrollArrow}
          style={{
            transform: scrollDirection === 'right' ? 'rotate(0deg)' : 'rotate(180deg)', // Rotate arrow based on scroll direction
          }}
        >
          &#10094;
        </span>
      </button>

      <div className={styles.scrollWrapper} ref={containerRef}>
        <div className={styles.scrollContent}>
          <div className={styles.component}>{leftComponent}</div>
          <div className={styles.component}>{rightComponent}</div>
        </div>
      </div>
    </div>
  );
};

export default LeftyRighty;
