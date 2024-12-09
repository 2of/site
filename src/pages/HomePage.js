import React from "react";
import { useGlobalContext } from "../contexts/globalcontext";
import projects from "../dummy_data/dummy_projects.json";
import { HeroCell, LinksCell, ProjectCard, FixedCard, CVCard, CTACard } from "./HomePageCells";
import "./homepage.scss";
import CardWithSparkles from "../components/sparklecard";

const HomePage = () => {
  const { isDarkMode } = useGlobalContext();

  return (
    <div className={isDarkMode ? "homepage dark-mode" : "homepage light-mode"}>
      <div className="grid-container">
        {/* Section 1 Label */}
   
        {/* Double-wide hero section */}
        <HeroCell />

        <LinksCell />
        <CVCard />
        <FixedCard />
        <FixedCard />

        {/* Section 2 Label */}
        
        {/* Dynamic Project Cards */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <CTACard></CTACard>

        {/* Sparkles */}
        {/* <CardWithSparkles /> */}
      </div>
    </div>
  );
};

export default HomePage;