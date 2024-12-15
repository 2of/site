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
        <h1>
          Howdy{" "}
          <span role="img" aria-label="wave">
            👋
          </span>{" "}
          
        </h1>
        <p>
          This is a (reasonably) responsive REACT site ..{" "}
          <span role="img" aria-label="smile">
            😊
          </span> It's mostly a WIP at the moment 
        </p>

        <p></p>

        <h1>
          <p> Work in Progress </p>
          <span role="img" aria-label="wave">
            🛠️
          </span>
          <span role="img" aria-label="wave">
            🛠️
          </span>
        </h1>
        <p>
          {/* There's a bit of dummy info on here at the moment, but the site itself is a WIP. Check out my <a href="https://github.com/2of" target="_blank" rel="noopener noreferrer">GitHub</a> for projects not yet here! */}
        </p>
      </div>

      <div className={styles.bouncyarrows}>
        <span className={styles.arrow}>↓</span>
        <span className={styles.arrow}>↓</span>
        <span className={styles.arrow}>↓</span>
      </div>
    </div>
  );
};

export default Herocell;
