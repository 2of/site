import React, { useEffect, useState } from 'react';
import styles from './Crowd.module.scss'; // Import the SCSS module

// Box-Muller Transform for generating normally distributed random numbers
const generateGaussian = (mean = 50, stdev = 15) => {
  let u1 = Math.random();
  let u2 = Math.random();
  let z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
  return mean + z0 * stdev;
};

const Crowd = ({ numPeople = 100 }) => {
  const [positions, setPositions] = useState([]);

  // Initialize random positions for the crowd using normal distribution
  useEffect(() => {
    const initialPositions = [];
    for (let i = 0; i < numPeople; i++) {
      const x = generateGaussian(50, 20); // Gaussian distribution for x (mean: 50%, stdev: 20%)
      const y = generateGaussian(50, 20); // Gaussian distribution for y (mean: 50%, stdev: 20%)

      initialPositions.push({
        x: Math.min(Math.max(x, 0), 100),  // Clamp to 0-100% for x position
        y: Math.min(Math.max(y, 0), 75),  // Clamp to 0-75% for y position
        bobbing: Math.random() * 0.05,  // Reduced random speed for subtle bobbing
        offset: Math.random() * 100,  // Random starting offset for bobbing
        lightEffect: Math.random() < 0.1 ? 'red' : null, // Randomly assign a light color (10% chance)
      });
    }
    setPositions(initialPositions);
  }, [numPeople]);

  // Update the bobbing effect in each frame
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prevPositions) =>
        prevPositions.map((person) => ({
          ...person,
          y: person.y + Math.sin((Date.now() + person.offset) / 3000) * person.bobbing, // Subtle bobbing effect with slower frequency
        }))
      );
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.crowd}>
      {positions.map((person, index) => (
        <div
          key={index}
          className={`${styles.person} ${person.lightEffect ? styles[person.lightEffect] : ''}`}
          style={{
            left: `${person.x}%`,  // Horizontal position (Gaussian distribution)
            bottom: `${person.y}%`, // Vertical position (Gaussian distribution)
            animation: `bob ${person.bobbing}s infinite ease-in-out`, // Subtle bobbing animation
          }}
        ></div>
      ))}
    </div>
  );
};

export default Crowd;
