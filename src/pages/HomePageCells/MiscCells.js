import React from "react";


import { useState, useEffect } from "react";


export const FillerCard = ({text = "placeholder"}) => { 


    return (
    <div className=" card ">
    <h2>{text}</h2>
 
  
  </div>
);
}


export const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        className={`card project  ${project.image ? "card_with_image" : ""}`}
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

  export const FooterCard = ({ text = "placeholder" }) => {
    return (
      <div className="card">
        {/* <div className="card_title"> */}
          {/* <h2>Information:</h2> */}
        {/* </div> */}
        <div className="card_content">
        <p>
  © 2024 Noah King. All rights reserved. ✨ <br />
  Thanks for visiting! 🚀 Explore, learn, and feel free to <a 
    href="mailto:your.nhking4@gmail.com" 
    style={{ color: "#f39c12", textDecoration: "none", fontWeight: "bold" }}
  >contact me</a>. <br />
  This site is my personal space with tools for everyday use—no warranties. 😉<br />
  Enjoy! 🌟
</p>
<div className="socialLinks">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="socialLink twitter">
            <i className="fab fa-twitter"></i> 
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="socialLink github">
            <i className="fab fa-github"></i> 
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="socialLink linkedin">
            <i className="fab fa-linkedin"></i> 
          </a>
        </div>
  


        
        </div>

        
      </div>
    );
  };