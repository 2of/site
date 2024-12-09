import React from "react";
import { Link } from "react-router-dom";

import routes from "../routes"; // Import routes.js
import "./HomePageCells.scss";
import { useState, useEffect } from "react";
// Hero Cell
import "../styles/card.scss";
export const HeroCell = () => {
  return (
    <div className="grid-item hero double-wide card">
      <div className="hero-image">
        {/* <img src="https://picsum.photos/1200/600" alt="Hero" /> */}
      </div>
      <h1>2of.io</h1>
      <h2>This is my 'mess around with react' site. Thanks for finding it?</h2>

      <h3>click on stuff in the 'links' cell</h3>
      <p className="hero-paragraph">
        Most of the long text on this site was generated to just fill in dummy data :)
      </p>
      <div className="social-icons">
        <a
          href="https://github.com/noah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://twitter.com/noah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://linkedin.com/in/noah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};
// Links Cell
export const LinksCell = () => (
  <div className="grid-item links card ">
    {/* <div className="card_title">
      <h2>Links</h2>
    </div> */}
    <div className="card_content">
    <ul>
      {routes.map(
        (route, index) =>
          true && (
            <li key={index}>
              <Link to={route.path}>{route.label}</Link>
            </li>
          )
      )}
    </ul>

    </div>
    
  </div>
);
export const CVCard = () => (
    <div className="grid-item CV card">
      <h2>Hire me?</h2>
      <p>Want to work with someone who built this horribly broken site you're browsing right now? 👀</p>
            <p>It's a WIP and mostly a tool at the moment</p>
      <p>CSS is my passion 😉 because you see it </p>
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
