import React from "react";
import { useGlobalContext } from "../contexts/globalcontext";
import projects from "../dummy_data/dummy_projects.json";
import { HeroCell, LinksCell, ProjectCard, FixedCard, CVCard, CTACard,AboutMeCard } from "./HomePageCells";
import "./homepage.scss";
import CardWithSparkles from "../components/sparklecard";
import { DarkModeToggleCell } from "./HomePageCells/DarkModeCell";

const HomePage = () => {
  const { isDarkMode } = useGlobalContext();

  return (
    <div className={isDarkMode ? "homepage dark-mode" : "homepage light-mode"}>
      <div className="grid-container">
        {/* Section 1 Label */}
   
        {/* Hero section (3x2) */}
        <div className="grid-item threebytwo">
          <HeroCell />
        </div>

        <LinksCell cardtype="onebytwo"/>
        <AboutMeCard cardtype="onebytwo"/>
        <FixedCard className="onebytwo" /> {/* Example of a 2-column wide card */}
        <FixedCard className="" /> {/* Example of a 2x2 card */}
        <DarkModeToggleCell/>
        {/* Section 2 Label */}
        
        {/* Dynamic Project Cards */}
        {projects.map((project, index) => (
  <div
    className={`grid-item ${index === projects.length - 1 ? 'twobyone' : ''}`}
    key={project.id}
  >
    <ProjectCard project={project} />
  </div>
))}
        <CTACard></CTACard>
        

        {/* Sparkles */}
        {/* <CardWithSparkles /> */}
      </div>
    </div>
  );
};

export default HomePage;