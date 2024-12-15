import React from "react";
import styles from "./MosaicHome.module.scss"; // Importing the CSS Module
import { ContainerNav } from "../nav/containernav";
import { DarkModeToggleCell } from "./HomePageCells/DarkModeCell";
import Herocell from "./HomePageCells/Hero";
import { ExplainerCard, FooterCard, ProjectCard } from "./HomePageCells/MiscCells";

import projects from "../dummy_data/dummy_projects.json";

export const HomePage2 = () => {
  return (
    <div className={styles.gridContainer}>
      <div
        className={`${styles.gridItem} ${styles.full_screen_sm}  ${styles.threextwo_md} ${styles.threextwo_lg} `}
      >
        <Herocell />
      </div>
      <div
        className={`${styles.gridItem} ${styles.onextwo_xs} ${styles.onextwo_sm} ${styles.onextwo_md} ${styles.onextwo_lg} ${styles.onextwo_xl}`}
      >
        <ContainerNav />
      </div>
      <div
        className={`${styles.gridItem}  ${styles.twoxthree_md} ${styles.twoxtwo_lg}`}
      >
        <ExplainerCard />
      </div>
      <div
        className={`${styles.gridItem} ${styles.halfscreen_sm} ${styles.twoxone_md} ${styles.twoxone_lg} `}
      >
        <DarkModeToggleCell />
      </div>
      <div
        className={`${styles.gridItem}  ${styles.twoxone_md} ${styles.twoxone_lg}`}
      >
        <ProjectCard project={projects[1]} />
      </div>
      <div
        className={`${styles.gridItem} ${styles.halfscreen_sm} ${styles.twoxone_md} ${styles.twoxone_lg}`}
      >
        <FooterCard />
      </div>
    </div>
  );
};