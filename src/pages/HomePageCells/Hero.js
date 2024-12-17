import React, { useState } from "react";
import styles from "./HeroCell.module.scss";

import { ZuneTextBG } from "../../components/ZuneText";

const Herocell = () => {
  const [hovered, setHovered] = useState(false);

  // Handle mouse over and mouse out
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div className={styles.heroCell}>


      <ZuneTextBG text={"Howdy"} blur={false}/>


      <div className={styles.greeting}>
        <h1 className={styles.greetingTitle}>
          Howdy{" "}
          <span role="img" aria-label="wave">
            👋
          </span>
        </h1>
        <p className={styles.introText}>
         This place is a little 'in progress' 
          
      
        </p>
        <h2 className={styles.wipTitle}>
          {" "}
          <span role="img" aria-label="tools">
            🛠️
          </span>
          <span role="img" aria-label="tools">
            🛠️
          </span>
        </h2>

        <p className={styles.introText}>
        Scroll down for a little CV and some links {" "}
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