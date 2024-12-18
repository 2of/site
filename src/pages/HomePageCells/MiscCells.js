import React from "react";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import styles from './MiscCells.module.scss'; 
import { ZuneTextBG } from "../../components/ZuneText";

export const FillerCard = ({text = "placeholder"}) => { 


    return (
    <div className=" card ">
    <h2>{text}</h2>
 
  
  </div>
);
}

export const ExplainerCard = () => {
  return (
    <div className={` ${styles.explainer}`}> {/* Combine 'card' and 'styles.explainer' */}
          {/* <ZuneTextBG text={"Howdy"} blur={false} color="brown"/> */}
      


      {/* <div className={styles.content}> */}


      <div className={styles.card_title}>
        <h2>Hey, I'm Noah! 👋 </h2>
      </div>
      {/* <div class={styles.dotDivider}></div> */}
        {/* <p className={styles.firstp}>
          Welcome to my corner of the internet! 🌍 I'm currently a Master of AI student at the University of Canterbury, Christchurch, New Zealand 🇳🇿. Alongside my academic pursuits, I have a strong background in IT, with experience as an IT administrator, network engineer, and general IT specialist 🖥️.
        </p> */}

        <ul className={styles.qualifications}>
          <li>🎓 <span className={styles.highlight}>Master's in Artificial Intelligence</span> @ UC (In progress)</li>
          <li>🎓 Bachelor of Science in <span className={styles.highlight}>Computer Science</span> @ UC</li>
          <li>🛠️ 5+ years of experience as an <span className={styles.highlight}>IT Administrator</span></li>
          <li>🛠️ Expertise with <span className={styles.highlight}>M365, Entra, Intune, MDM, Google Admin</span></li>
          <li>🛠️ <span className={styles.highlight}>Network Engineering expertise</span> (design & troubleshooting)</li>
          <li>💻 Langs & Frameworks: <span className={styles.highlight}>Python, Java, JavaScript, C#, React, CSS, C, C++, R</span></li>
          <li>💻 More specific Langs & Tools: <span className={styles.highlight}>TensorFlow, Pandas, SQL, Spark, PyTorch</span> for <span className={styles.highlight}>Machine Learning and Neural Network Architecture</span></li>
          <li>📊 Strong in <span className={styles.highlight}>R, regression analysis, and data processing</span></li>
          <li>📚 A big fan of creating thorough documentation</li>
        </ul>
        <div class={styles.dotDivider}></div>
        <div className="card_content">
          <p className={styles.secondp}>
            Want to see what I've been working on? Check out my work on <a className={styles.highlight} href="https://github.com/2of" target="_blank" rel="noopener noreferrer">GitHub</a> 💼. More projects will be added here soon! ✨
          </p>
        </div>
      </div>
    // </div>
  );
};
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
      <div className={`card ${styles.footerCard}`}>
        <div className={styles.card_content}>
          <p className={styles.footerText}>
            © 2024 Noah King. All rights reserved. ✨ <br />
            Thanks for visiting! 🚀 Explore, learn, and feel free to <a 
              href="mailto:your.nhking4@gmail.com" 
              className={styles.contactLink}
            >contact me</a>. <br />
            This site is my personal space with tools for everyday use—no warranties. 😉<br />
            Enjoy! 🌟
          </p>
          <div className={styles.socialLinks}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.twitter}`}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.github}`}>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} ${styles.linkedin}`}>
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    );
  };