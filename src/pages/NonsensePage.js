import React, { useEffect, useState } from "react";
import "./MorphingGrid.scss";

const MorphingGrid = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Update cursor position on mousemove
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculateBorderRadius = (itemX, itemY, cursorX, cursorY, width, height) => {
    const distance = (x1, y1, x2, y2) => Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

    const scaleFactor = 15; // Adjust this to tweak the sensitivity of morphing
    const maxRadius = 50; // Max border-radius percentage
    const minRadius = 5; // Min border-radius percentage

    const topLeft = Math.max(
      minRadius,
      maxRadius - distance(cursorX, cursorY, itemX, itemY) / scaleFactor
    );
    const topRight = Math.max(
      minRadius,
      maxRadius - distance(cursorX, cursorY, itemX + width, itemY) / scaleFactor
    );
    const bottomRight = Math.max(
      minRadius,
      maxRadius - distance(cursorX, cursorY, itemX + width, itemY + height) / scaleFactor
    );
    const bottomLeft = Math.max(
      minRadius,
      maxRadius - distance(cursorX, cursorY, itemX, itemY + height) / scaleFactor
    );

    return [topLeft, topRight, bottomRight, bottomLeft];
  };

  return (
    <div className="grid-container">
      {[...Array(9)].map((_, index) => {
        const borderRadiusValues = calculateBorderRadius(
          (index % 3) * 120 + 60, // x position of the grid item's center
          Math.floor(index / 3) * 120 + 60, // y position of the grid item's center
          cursorPos.x,
          cursorPos.y,
          100,
          100
        );

        const borderRadiusString = borderRadiusValues.join("% ") + "%";

        return (
          <div
            key={index}
            className="grid-item"
            style={{
              borderRadius: borderRadiusString,
            }}
          >
            <div className="border-radius-text">
              {borderRadiusValues.map((value, i) => (
                <p key={i}>Corner {i + 1}: {value.toFixed(1)}%</p>
              ))}
            </div>
          </div>
        );
      })}



    </div>
  );
};

export default MorphingGrid;