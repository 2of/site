import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../contexts/globalcontext';
import styles from './DarkModeToggle.module.scss'; // Scoped styles

import buoy from '../../res/buoy.png';
import Person from '../PlayGround/Person';
import SunMoon from './SunMoon'; // Import the SunMoon component

const Wave = () => {
  const getRandomDuration = () => `${Math.random() * 8 + 2}s`; // Random duration between 1s and 3s
  const getRandomDelay = () => `${Math.random() * 7}s`; // Random delay between 0s and 2s

  const waves = [1, 2, 3].map((_, index) => (
    <div key={index} className={styles.wave} style={{ '--i': index + 1 }}>
      test
    </div>
  ));

  return <>{waves}</>;
};




const BeachPeople = ({ onwater = false }) => {
  // Function to generate a random position and random animation delay within the container
  const createRandomPosition = () => {
    const delay = onwater ? `${Math.random() * 2}s` : '0s'; // Random delay between 0s and 2s for onwater people

    if (onwater) {
      return {
        top: `${Math.random() * 30 + 10}%`,  // Random vertical position (10% to 40% height)
        right: `${Math.random() * 30 + 1}%`, // Random horizontal position (1% to 31% width)
        animationDelay: delay, // Apply the random delay
      };
    } else {
      return {
        top: `${Math.random() * 30 - 10}%`,  // Random vertical position (50% to 80% height)
        left: `${Math.random() * 30 - 4}%`, // Random horizontal position (1% to 31% width)
      };
    }
  };

  return (
    <div className={styles.beach_people}>
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className={`${styles.SinglePersonContainer_BEACH} ${onwater ? styles.bobbing : ''}`}
          style={createRandomPosition()}
        >
          <Person random={true} hasLegs={!onwater} />
        </div>
      ))}
    </div>
  );
};


const AnimatedWaveText = ({text}) => {
  return (
    <svg
      width="100%"
      height="150"
      viewBox="0 0 500 150"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="waveTextTitle"
    >
      {/* Accessible Title */}
      <title id="waveTextTitle">Animated wave-shaped text</title>

      {/* Define the wave path */}
      <path
        id="wavePath"
        d="M0,75 Q125,0 250,75 T500,75"
        fill="none"
        stroke="none"
      />

      {/* Text following the wave path */}
      <text fill="#1c2a38" fontSize="2.5rem" textAnchor="middle">
        <textPath href="#wavePath">
          <animate
            attributeName="startOffset"
            from="0%"
            to="100%"
            dur="5s"
            repeatCount="indefinite"
          />
          {text}
        </textPath>
      </text>
    </svg>
  );
};



export const DarkModeToggleCell = () => {
  const { isDarkMode, toggleTheme } = useGlobalContext();
  const [animating, setAnimating] = useState(false);

  // Handle theme toggle animations
  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => setAnimating(false), 3000);
    return () => clearTimeout(timer);
  }, [isDarkMode]);

  return (
    <div
      className={`${styles.darkModeToggle} ${isDarkMode ? styles.dark : styles.light}`}
      onClick={toggleTheme}
    >

<AnimatedWaveText text={"TOGGLE DARKMODE"}/>
      <div className={styles.content}>
        <SunMoon isDarkMode={isDarkMode} animating={animating} />
      </div>

      {isDarkMode && (
        <div className={styles.buoy}>
          <img src={buoy} alt="Buoy" />
        </div>
      )}

      <div className={styles.hill}>
        {!isDarkMode && (
          <div className={styles.river}>
            <Wave />
          </div>
        )}

        {!isDarkMode && (
          <>
        <BeachPeople/>
        <BeachPeople onwater={true}/>


        </>
          // <div className={styles.beach_people}>
          //   <div className={styles.SinglePersonContainer_BEACH}>
          //     <Person random={true} />
          //   </div>
          //   <div className={styles.SinglePersonContainer_BEACH}>
          //     <Person random={true} />
          //   </div>
          //   <div className={styles.SinglePersonContainer_BEACH}>
          //     <Person random={true} />
          //   </div>
          //   <div className={styles.SinglePersonContainer_BEACH}>
          //     <Person random={true} />
          //   </div>
          // </div>
        )}
      </div>
    </div>
  );
};