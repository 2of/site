import React, { useEffect, useState } from "react";
import "./BackgroundPattern.scss";

export const BackgroundPattern = () => {
  const [position, setPosition] = useState({ x: "50%", y: "50%" });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      // Calculate the position in percentages
      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;

      // Update position
      setPosition({ x: `${x}%`, y: `${y}%` });
    };

    // Add event listener to track mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="BackgroundContainerPattern">
      <div
        className="background-image"
        style={{
          // transform: `translate(-50%, -50%) translate(${position.x}, ${position.y})`,
        }}
      ></div>
    </div>
  );
};