import React from "react";
import { useGlobalContext } from "../contexts/globalcontext";
import projects from "../dummy_data/dummy_projects.json";
import writings from "../dummy_data/dummy_writings.json";
import { HeroCell, LinksCell, ProjectCard, WritingCard, FunCell } from "./HomePageCells";
import "./homepage.scss";

const HomePage = () => {
  const { isDarkMode } = useGlobalContext();

  return (
    <div className={isDarkMode ? "homepage dark-mode" : "homepage light-mode"}>
      <div className="grid-container">
        {/* Double-wide hero section */}
        <HeroCell />

        <LinksCell />

        {/* Dynamic Project Cards */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {/* Dynamic Writing Cards */}
        {writings.map((writing) => (
          <WritingCard key={writing.id} writing={writing} />
        ))}

        {/* Placeholder Fun Section */}
        <FunCell />
      </div>
    </div>
  );
};

export default HomePage;