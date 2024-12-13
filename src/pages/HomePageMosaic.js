import React from "react";
import styles from "./MosaicHome.module.scss"; // Importing the CSS Module
import { ContainerNav } from "../nav/containernav";
import { DarkModeToggleCell } from "./HomePageCells/DarkModeCell";
// import { HeroCell } from "./HomePageCells";
import Herocell from "./HomePageCells/Hero";
import { FillerCard, FooterCard } from "./HomePageCells/MiscCells";
import { ProjectCard } from "./HomePageCells";

import projects from "../dummy_data/dummy_projects.json";

export const HomePage2 = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={`${styles.gridItem} ${styles.threextwo}`}>
        <Herocell />
      </div>
      <div className={`${styles.gridItem} ${styles.onextwo}`}>
        <ContainerNav />
      </div>
      <div className={`${styles.gridItem} ${styles.twoxone}`}>
        <DarkModeToggleCell />
      </div>
      <div className={`${styles.gridItem} ${styles.onexone}`}>
        <FillerCard text="Over the top dark mode toggle ^^ " />
      </div>
      <div className={`${styles.gridItem} ${styles.onexone}`}>
        <FillerCard />
      </div>

      <div className={`${styles.gridItem} ${styles.onexone}`}>
        <ProjectCard project={projects[0]} />
      </div>
      <div className={`${styles.gridItem} ${styles.onexone}`}>
        <ProjectCard project={projects[1]}></ProjectCard>
      </div>
      <div className={`${styles.gridItem} ${styles.onexone}`}>
        <ProjectCard project={projects[1]}></ProjectCard>
      </div>
      <div className={`${styles.gridItem} ${styles.twoxone}`}>
        {" "}
        <ProjectCard project={projects[2]} />
      </div>
      <div className={`${styles.gridItem} ${styles.onexone}`}>        <FooterCard /></div>
      {/* <div className={`${styles.gridItem} ${styles.onexone}`}>Item 1</div> */}
    </div>
  );
};
