import React from "react";
import { Link } from "react-router-dom";
import routes from "../routes"; // Import routes.js
import "./HomePageCells.scss";
import { useState,useEffect } from "react";
// Hero Cell

export const HeroCell = () => {
    return (
      <div className="grid-item hero double-wide card">
        <div className="hero-image">
          {/* <img src="https://picsum.photos/1200/600" alt="Hero" /> */}
     
          
        </div>
        <h1>Well this is awkward</h1>
        <h2>This is my 'mess around with react' site. Thanks for finding it?</h2>
        
        <h3>click on stuff in the 'links' cell</h3>
        <p className="hero-paragraph">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, laboriosam dolores? Similique mollitia delectus iste, exercitationem dignissimos a nulla maiores modi! Nostrum repudiandae quia dolorum ipsa dicta recusandae quis quos illo laborum eligendi nesciunt perspiciatis voluptate voluptatibus, mollitia dolores veritatis tempora, accusamus esse, aliquid odio sunt! Libero possimus dolores maiores!
        </p>
        <div className="social-icons">
          <a href="https://github.com/noah" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/noah" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com/in/noah" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    );
  };
// Links Cell
export const LinksCell = () => (
  <div className="grid-item links glassCard ">
    <h2>Explore More</h2>
    <ul>
      {routes.map((route, index) => (
        route.showlinks && (
          <li key={index}>
            <Link to={route.path}>{route.label}</Link>
          </li>
        )
      ))}
    </ul>
  </div>
);
export const CVCard = () => (
    <div className="grid-item CV glassCard ">
      <h2>Hire me for</h2>
      <ul>
        {routes.map((route, index) => (
          route.showlinks && (
            <li key={index}>
              <Link to={route.path}>{route.label}</Link>
            </li>
          )
        ))}
      </ul>
    </div>
  );
// Project Card Cell
export const ProjectCard = ({ project }) => (
  <div className="grid-item project glassCard">
    <h2>{project.title}</h2>
    <p>{project.description}</p>
    <p className="date">{project.date}</p>
  </div>
);

// Writing Card Cell
export const WritingCard = ({ writing }) => (
  <div className="grid-item writing glassCard">
    <img src={writing.image} alt={writing.title} />
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