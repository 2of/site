import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import routes from "../routes"; // Import routes.js
// import "./HomePageCells.scss";
import { useState, useEffect } from "react";
// Hero Cell
// import "../styles/card.scss";
import { ArrowCta } from "../res/arrowcta";
export const HeroCell = () => {
    return (
      <div className="grid-item hero double-wide card">
        <div className="hero-content">
          <h1>Hey, I'm Noah 👋 This is just my lil WIP</h1>
         

          </div>
  
         
   
      </div>
    );
  };
// Links Cell


export const LinksCell = ({ cardtype  = "" }) => (
    <div className={`grid-item links card ${cardtype}`}>
    <div className="card_content">
      <ul>
        {routes.map(
          (route, index) =>
            route.showInNav && (
              <li key={index}>
                <NavLink
                  to={route.path}
                  activeClassName="active-link" // Applies when the link is active
                  exact // Ensure the link is only active when exactly matching the path
                >
                  {route.label}
                </NavLink>
              </li>
            )
        )}
      </ul>
    </div>
  </div>
);
export const CVCard = () => (
    <div className="grid-item CV card">
hi
    </div>
  );

export const FixedCard = () => { 


    return (
    <div className="grid-item  card ">
    <h2>Hire me</h2>
  
  </div>
);
}

export const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`grid-item project card ${project.image ? "card_with_image" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.image && (
        <div
          className="cardBGImg"
          style={{
            backgroundImage: `url(${project.image})`,
            opacity: isHovered ? 0.6 : 0.1, // Change opacity based on hover state
          }}
        />
      )}

      <div className="card_title">
        <h2 className="card_title">{project.title}</h2>
        <h3 className="date card_subtitle">{project.date}</h3>
        <p className="card_content">{project.description}</p>

      </div>

      <div className="card_cta">See More →</div>
    </div>
  );
};



export const AboutMeCard = ({cardtype}) => {
  const [isHovered, setIsHovered] = useState(false);

  const aboutMe = {
    image: "path_to_your_image.jpg", // Replace with your image URL or path
    title: "About Me",
    subtitle: "Software Developer & Designer",
    description:
      "Hi! I'm passionate about creating engaging user experiences, solving complex problems, and bringing ideas to life through code. Let's build something amazing together!",
  };

  return (
    <div
      className={`grid-item about-me card ${aboutMe.image ? "card_with_image" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {aboutMe.image && (
        <div
          className="cardBGImg"
          style={{
            backgroundImage: `url(${aboutMe.image})`,
            opacity: isHovered ? 0.6 : 0.1, // Change opacity based on hover state
          }}
        />
      )}

      <div className="card_title">
        <h2 className="card_title">{aboutMe.title}</h2>
        <h3 className="card_subtitle">{aboutMe.subtitle}</h3>
        <p className="card_content">{aboutMe.description}</p>
      </div>

      <div className="card_cta">Learn More →</div>
    </div>
  );
};


// Writing Card Cell
export const WritingCard = ({ writing }) => (
  <div className="grid-item writing card">
    {/* <img src={writing.image} alt={writing.title} /> */}
    <h2>{writing.title}</h2>
    <p>{writing.description}</p>
    <p className="date">{writing.date}</p>
  </div>
);

// Fun Cell (Placeholder)
export const FunCell = () => (
  <div className="grid-item fun glassCard">
    <h2>Fun</h2>
    <p>Discover lighthearted content.</p>
  </div>
);

export const CTACard = () => {
    return (
      <div className="grid-item card cta-card">
        <div className="cta-container">
          <div className="arrow-wrapper">
            <ArrowCta className="arrow" width="100px" height="100px" /> {/* Increased size of SVG */}
          </div>
          <p className="cta-text">Employers</p>
        </div>
      </div>
    );
  };