import React from "react";
import styles from "./MosaicHome.module.scss"; // Importing the CSS Module
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

export const HomePage2 = () => {
  const screenSize = useScreenSize()
  return (

    <>
<ZuneTextBG blur={true} color="palmShade" verydarkblur={true} />
    {screenSize === 'sm'  && ( 

<ZuneTextBG blur={true} color="palmShade"/>
    )}
 {/* <div className={clsx (styles.gridPageContainer, { [styles.mobile]: screenSize === "sm" })}> */}
 <div
  className={clsx(
    styles.gridContainer,
    {
      [styles.sm]: screenSize === "sm",
      [styles.md]: screenSize === "md",
      [styles.lg]: screenSize === "lg",
    }
  )}
>
      
      <div
        className={`${styles.gridItem} ${styles.full_screen_sm}  ${styles.twoxtwo_md} ${styles.threextwo_lg} `}
      >
        <Herocell />
      </div>
      {screenSize === 'sm' && ( 
      <div
        className={`${styles.gridItem} ${styles.halfscreen_sm} ${styles.onextwo_xs} ${styles.onextwo_sm} ${styles.onextwo_md} ${styles.onextwo_lg} `}
      >
        <ContainerNav />
      </div>
      )}

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
        className={`navBG ${styles.gridItem}  ${styles.threexthree_md} ${styles.threextwo_lg}`}
      >

  <LeftyRighty leftComponent={<Overview/>} rightComponent={<SkillsDrillDown/>}/>
               {/* <Overview /> */}
      </div>

   

      {screenSize === 'lg' && ( 
    
    <div
    className={`navBG ${styles.gridItem}  ${styles.onexone_md} ${styles.onexone_lg}`}
  >
    <FillerCard/>

  </div>
      )}
    
      

      
      <div
        className={`navBG ${styles.gridItem} ${styles.halfscreen_sm} ${styles.threexone_md} ${styles.onexone_lg}`}
      >
        <FooterCard />
      </div>
   </div>
   {/* </div> */}
    </>

  );
};
