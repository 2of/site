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

    >
      <div className={styles.greeting}>
        <h1>
          Work In Progress! <span role="img" aria-label="wave">👋</span>
        </h1>
        <p>
       This is a (reasonably) responsive REACT site .. <span role="img" aria-label="smile">😊</span>
        </p>

        <p>
       It's a work in progress, But feel free to punt around. 
       When I get time I'll squash bugs
        <span role="img" aria-label="smile">😊</span>
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