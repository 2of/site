import React, { useEffect, useState } from "react";
import "./MorphingGrid.scss";
import Person from "./PlayGround/Person";
import { AnimationDull } from "../components/dancers/fun_one";
import { OverTheTopDarkmodeToggle } from "../components/OverTheTopDarkModeToggleSquare";
import Crowd from "../components/Miscellaneous/crowd";
import { BouncyArrows } from "../components/Miscellaneous/BouncyArrows";
import useDeviceType from "../tools/DeviceType";
import { ZuneTextBG } from "../components/ZuneText";
import { PageTransitionViewforTikTokPage } from "../components/PageTransitionMaskTikTokView";
import HorizontalScroller from "../components/HorizontalScroller";
import LeftyRighty from "../components/LeftyRighty";
import Overview from "./HomePageCells/Overview";
import SkillsDrillDown from "./HomePageCells/SkillsDrillDownCell";
import Nav2 from "../nav/nav";
import DarkModeToggle from "../components/darkmodetoggle";
import { OverlayNav } from "../nav/overlayNav";














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

  const devicetype = useDeviceType()

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
  const components = [
    <div className="item" style={{ backgroundColor: '#FF6F61' }}>Item 1</div>,
    <div className="item" style={{ backgroundColor: '#89A8B2' }}>Item 2</div>,
    <div className="item" style={{ backgroundColor: '#B3C8CF' }}>Item 3</div>,
    <div className="item" style={{ backgroundColor: '#FF6F61' }}>Item 4</div>,
    <div className="item" style={{ backgroundColor: '#89A8B2' }}>Item 5</div>,
    <div className="item" style={{ backgroundColor: '#B3C8CF' }}>Item 6</div>,
    <div className="item" style={{ backgroundColor: '#FF6F61' }}>Item 7</div>,
    <div className="item" style={{ backgroundColor: '#89A8B2' }}>Item 8</div>,
  ];

  return (
 
        <div className="StandardPageContainer">
          <br/>
<br/>

<br/>
<br/>

<br/>
<br/>
<br/>
<br/>

          <h2>space</h2>
<div className="ThingieContainer">
  <OverTheTopDarkmodeToggle/>
</div>
<div className="ThingieContainer">
  <PageTransitionViewforTikTokPage where="top" kind="afterland"/>
</div>

<DarkModeToggle/>


<div className="BigWideContainer">
 {/* <Nav2/> */}
</div>
HERE
<div className="ThingieContainer">


</div>





     
     <div className="lilcontainer">
      <Crowd/>
     </div>

    <div className="ThingieContainer">

test
      <BouncyArrows/>
    </div>
   <h1>test2</h1>
    
    <div className="ThingieContainer">

   <HorizontalScroller items={components} />
    </div>
    <div className="ThingieContainer">
{/* bottom */}
    <PageTransitionViewforTikTokPage where="bottom"/>
    </div>
    <div className="ThingieContainer">
      {/* top */}
<PageTransitionViewforTikTokPage where="top"/>
<h1>test</h1>
</div>
<div className="BIGThingieContainer">


  <LeftyRighty leftComponent={<Overview/>} rightComponent={<SkillsDrillDown/>}/>
  </div>

   <div className="ThingieContainer">
    <ZuneTextBG text={"SDFDSF"}/>

    <h1>test</h1>
    <h2>I Like food</h2>

    </div>
   <h2>{devicetype}</h2>

      <AnimationDull anim_number={1}/>
      <AnimationDull anim_number={2}/>
      <AnimationDull anim_number={4}/>
      <AnimationDull anim_number={3}/>
      <AnimationDull anim_number={5}/>









    </div>


  );
};

export default MorphingGrid;