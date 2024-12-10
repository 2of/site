import React, { useState } from "react";
import styles from "./HeroCell.module.scss";

const Herocell = () => {
  const [hovered, setHovered] = useState(false);

  // Handle mouse over and mouse out
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      className={styles.heroCell}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.greeting}>
        <h1>
          Hey there! <span role="img" aria-label="wave">👋</span>
        </h1>
        <p>
         Portfolio etc, it's that kind of site<span role="img" aria-label="smile">😊</span>
        </p>
        <p>
          I also put a whole bunch of handy stuff on here!
        </p>
        <button className={styles.ctaButton}>Let's Connect!</button>
      </div>
    </div>
  );
};

export default Herocell;