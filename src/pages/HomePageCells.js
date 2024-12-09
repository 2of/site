import React from "react";
import { Link } from "react-router-dom";

import routes from "../routes"; // Import routes.js
import "./HomePageCells.scss";
import { useState, useEffect } from "react";
// Hero Cell
// import "../styles/card.scss";
import { ArrowCta } from "../res/arrowcta";
export const HeroCell = () => {
    return (
      <div className="grid-item hero double-wide card">
        <div className="hero-image">
          {/* Background gradient instead of an image */}
        </div>
        <h1>Hey there! I'm Noah 👋 this is my website</h1>
        <p className="hero-paragraph">
            the css is a work in progress
         </p>
        <h2>This page is mostly for fun... but check out my writeups below</h2>
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
     
        <h3 className="cta-text">Check out the links below to get started.</h3>
  
       
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
          route.showInNav && (
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