import React, { useEffect, useState } from "react";
import "./MorphingGrid.scss";
import Person from "./PlayGround/Person";
import { AnimationDull } from "../components/dancers/fun_one";
import { OverTheTopDarkmodeToggle } from "../components/OverTheTopDarkModeToggleSquare";
import Crowd from "../components/Miscellaneous/crowd";














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
 
        <div className="StandardPageContainer">
          <h2>space</h2>
<div className="ThingieContainer">
  <OverTheTopDarkmodeToggle/>
</div>
     
     <div className="lilcontainer">
      <Crowd/>
     </div>


   <h1>test</h1>

      <AnimationDull anim_number={1}/>
      <AnimationDull anim_number={2}/>
      <AnimationDull anim_number={4}/>
      <AnimationDull anim_number={3}/>
      <AnimationDull anim_number={5}/>









    </div>


  );
};

export default MorphingGrid;