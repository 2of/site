import React from "react";
import { useGlobalContext } from "../contexts/globalcontext"; // Import the useGlobalContext hook
import "./homepage.scss"; // Import the SCSS file for styling

const HomePage = () => {
  const { isDarkMode } = useGlobalContext(); // Access dark mode state from context

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          Welcome to 2of.io
          <br />
          Placeholder Site Under Consutrction 
        </h1>
        <p className="hero-blurb">
          You're not suppoed to be here....   yet
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-container">
          <div className="project glassCard">
            <img src="https://picsum.photos/300/200" alt="Project 1" />
            <h3>Project 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="project glassCard">
            <img src="https://picsum.photos/300/200" alt="Project 2" />
            <h3>Project 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="project glassCard">
            <img src="https://picsum.photos/300/200" alt="Project 3" />
            <h3>Project 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="blogs">
        <h2 className="section-title">My Blogs</h2>
        <div className="blogs-container">
          <div className="blog glassCard">
            <h3>Blog Title 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="blog glassCard">
            <h3>Blog Title 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section className="photos">
        <h2 className="section-title">My Photos</h2>
        <div className="photos-container">
          <div className="photo glassCard">
            <img src="https://picsum.photos/400/300" alt="Photo 1" />
          </div>
          <div className="photo glassCard">
            <img src="https://picsum.photos/400/300" alt="Photo 2" />
          </div>
          <div className="photo glassCard">
            <img src="https://picsum.photos/400/300" alt="Photo 3" />
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="socials">
        <h2 className="section-title">Connect With Me</h2>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;