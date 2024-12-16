import React from "react";
import styles from "./AnimationDull.module.scss";

export const AnimationDull = ({ anim_number = 1 }) => {
  const renderAnimation = () => {
    switch (anim_number) {
      case 1: // Disco Ball
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className={styles.discoBall}
          >
            <circle cx="100" cy="100" r="80" fill="#333" />
            <g>
              {[...Array(30)].map((_, i) => (
                <rect
                  key={i}
                  x={Math.random() * 160 + 20}
                  y={Math.random() * 160 + 20}
                  width="10"
                  height="10"
                  fill="white"
                  opacity="0.7"
                  className={styles.discoTile}
                />
              ))}
            </g>
          </svg>
        );
      case 2: // Smiling Dog
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className={styles.smilingDog}
          >
            <circle cx="100" cy="100" r="80" fill="#333" />
            <circle cx="70" cy="80" r="10" fill="#fff" />
            <circle cx="130" cy="80" r="10" fill="#fff" />
            <path
              d="M70,130 Q100,160 130,130"
              stroke="#fff"
              strokeWidth="5"
              fill="transparent"
              className={styles.dogSmile}
            />
          </svg>
        );
      case 3: // Parachuting Person
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className={styles.parachuting}
          >
            <circle cx="100" cy="50" r="30" fill="#fff" />
            <path
              d="M50,50 Q100,10 150,50"
              fill="none"
              stroke="#fff"
              strokeWidth="4"
            />
            <line x1="100" y1="80" x2="70" y2="110" stroke="#fff" strokeWidth="3" />
            <line x1="100" y1="80" x2="130" y2="110" stroke="#fff" strokeWidth="3" />
            <rect x="90" y="110" width="20" height="50" fill="#fff" />
            <circle cx="100" cy="175" r="10" fill="#fff" />
          </svg>
        );
      case 4: // Bird Bobbing Head
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className={styles.bird}
          >
            <circle cx="100" cy="100" r="40" fill="#333" />
            <circle cx="85" cy="90" r="8" fill="#fff" />
            <circle cx="115" cy="90" r="8" fill="#fff" />
            <polygon points="90,120 110,120 100,135" fill="#fff" />
          </svg>
        );
      default:
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={styles.defaultAnimation}
          >
            <circle cx="50" cy="50" r="40" fill="#333" />
          </svg>
        );
    }
  };

  return <div className={styles.animationContainer}>{renderAnimation()}</div>;
};