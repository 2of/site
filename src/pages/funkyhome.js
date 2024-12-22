// import React, { useState, useEffect } from "react";
// import styles from "./FunkyHome.module.scss"; // Importing the CSS Module
// import { ZuneTextBG } from "../components/ZuneText";
// import useScreenSize from "../tools/screensize";

// export const FunkyHome = () => {
//   const screenSize = useScreenSize()
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY); // Track the scroll position
//     };
    
//     window.addEventListener("scroll", handleScroll); 
  
//     return () => {
//       window.removeEventListener("scroll", handleScroll); 
//     };
//   }, []);
  
//   const fadeZoomStyle = {
//     opacity: 1 - scrollY / window.innerHeight, // Fades out relative to the viewport height
//     transform: `scale(${1 - scrollY / (window.innerHeight * 2)})`, // Zoom out as you scroll
//     // transition: "transform 0.3s ease-out, opacity 0.3s ease-out", // Smooth transitions
//   };
  
//   return (
//     <>
//       {screenSize === "sm" && <ZuneTextBG blur={true} color="palmShade" />}

//       {/* Fixed bigTop */}
//       <div className={styles.bigTop} style={fadeZoomStyle}>

//         <div className={styles.gridcontainer}>
//           {Array.from({ length: 35 }, (_, index) => {
//             return <Cell key={index} />;
//           })}
//         </div>
//       </div>

//       {/* Spacer to keep bigTop fixed while bottomMain scrolls */}
//       <div className={styles.spacer}></div>

//       {/* Scrolling content */}
//       <div className={styles.bottomMain}>
//         <div className={styles.bigBottomContainer}>test</div>
//       </div>
//     </>
//   );
// };

// const Cell = () => {
//   // State to track whether the cell is expanded
//   const [isExpanded, setIsExpanded] = useState(false);

//   // Handle the toggle when clicked
//   const handleClick = () => {
//     setIsExpanded(prevState => !prevState);
//   };

//   return (
//     <div
//       className={`${styles.miscItem} ${isExpanded ? styles.expanded : ''}`}
//       onClick={handleClick} // Trigger the toggle on click
//     >
//       <h1>test</h1>
//     </div>
//   );
// };



import React, { useState } from "react";
import styles from "./FunkyHome.module.scss"; // Importing the CSS Module
import { ContainerNav } from "../nav/containernav";
import { DarkModeToggleCell } from "./HomePageCells/DarkModeCell";
import Herocell from "./HomePageCells/Hero";
import {
  BriefAboutCard,
  ExplainerCard,
  FillerCard,
  FooterCard,
  ProjectCard,
} from "./HomePageCells/MiscCells";

import projects from "../dummy_data/dummy_projects.json";
import { OverTheTopDarkmodeToggle } from "../components/OverTheTopDarkModeToggleSquare";
import { ZuneTextBG } from "../components/ZuneText";
import useScreenSize from "../tools/screensize";
import Overview from "./HomePageCells/Overview";
import SkillsDrillDown from "./HomePageCells/SkillsDrillDownCell";
import LeftyRighty from "../components/LeftyRighty";
import clsx from "clsx";

export const FunkyHome = () => {
  const screenSize = useScreenSize()
  const [isMini, setisMini] = useState(false)


  console.log(clsx(styles.gridContainer, { [styles.minified]: isMini }));



  return (

    <>

    {screenSize === 'sm'  && ( 

<ZuneTextBG blur={true} color="red"/>
    )}

<div className={clsx (styles.gridContainer, { [styles.minified]: isMini })}>

  <button onClick={() => setisMini(!isMini)}>{isMini ? "yes" : "No"}</button>
      
      <div
        className={`${styles.gridItem} ${styles.full_screen_sm}  ${styles.threextwo_md} ${styles.twoxtwo_lg} `}
      >
        <Herocell />
      </div>

      <div
        className={`${styles.gridItem} ${styles.halfscreen_sm} ${styles.onextwo_xs} ${styles.onextwo_sm} ${styles.onexthree_md} ${styles.onextwo_lg} `}
      >
        <ContainerNav />
      </div>

      <div
        className={`${styles.gridItem} ${styles.NoScrollSnap} ${styles.halfscreen_sm} ${styles.onextwo_md} ${styles.onextwo_lg} `}
      >
        <OverTheTopDarkmodeToggle />
        {/* <DarkModeToggleCell /> */}
      </div>


      {screenSize === 'sm' && ( 
      <div
        className={`${styles.gridItem} ${styles.halfscreen_sm}  ${styles.onexone_md} ${styles.onexone_lg}`}
      >
        <BriefAboutCard/>

      </div>
      )}

      
      <div
        className={`${styles.gridItem}  ${styles.twoxthree_md} ${styles.threextwo_lg}`}
      >

  <LeftyRighty leftComponent={<Overview/>} rightComponent={<SkillsDrillDown/>}/>
               {/* <Overview /> */}
      </div>

   
      <div
        className={`${styles.gridItem}  ${styles.onexone_md} ${styles.onexone_lg}`}
      >
        <FillerCard/>

      </div>


    
      

      
      <div
        className={`${styles.gridItem} ${styles.halfscreen_sm} ${styles.threexone_md} ${styles.onexone_lg}`}
      >
        <FooterCard />
      </div>
   </div>
    </>

  );
};


