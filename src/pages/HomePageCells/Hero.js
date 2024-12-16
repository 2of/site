import React, { useState } from "react";
import styles from "./HeroCell.module.scss";

const Herocell = () => {
  const [hovered, setHovered] = useState(false);

  // Handle mouse over and mouse out
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div className={styles.heroCell}>
      <div className={styles.greeting}>
        <h1 className={styles.greetingTitle}>
          Howdy{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <p className={styles.introText}>
          Welcome to my <span className={styles.highlight}>REACT</span> site!{" "}
          <span role="img" aria-label="smile">
            😊
          </span>{" "}
          It's currently a work in progress, but feel free to explore.
        </p>
        <h2 className={styles.wipTitle}>
          Work in Progress{" "}
          <span role="img" aria-label="tools">
            🛠️
          </span>
          <span role="img" aria-label="tools">
            🛠️
          </span>
        </h2>

        <p className={styles.introText}>
        Some information on my site is AI generated to fill in for dummy queries
          <span role="img" aria-label="smile">
            😊
          </span>{" "}
  
        </p>
        <p className={styles.subText}>
          Check out my{" "}
          <a
            href="https://github.com/2of"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>{" "}
          for more projects!
        </p>
      </div>

      <div className={styles.bouncyArrows} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span className={`${styles.arrow} ${hovered ? styles.hovered : ""}`}>↓</span>
        <span className={`${styles.arrow} ${hovered ? styles.hovered : ""}`}>↓</span>
        <span className={`${styles.arrow} ${hovered ? styles.hovered : ""}`}>↓</span>
      </div>
    </div>
  );
};

export default Herocell;