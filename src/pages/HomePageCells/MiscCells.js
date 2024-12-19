import React from "react";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import styles from './MiscCells.module.scss'; 
import { ZuneTextBG } from "../../components/ZuneText";
import useScreenSize from "../../tools/screensize";
import { PageTransitionViewforTikTokPage } from "../../components/PageTransitionMaskTikTokView";
import HorizontalScroller from "../../components/HorizontalScroller";
import clsx from "clsx";

export const FillerCard = ({text = "placeholder"}) => { 

  const size = useScreenSize()


    return (
    <div className={styles.filler}>

      {size === "sm" && ( 
        <PageTransitionViewforTikTokPage/>
      )}
    <h2>{text}</h2>
 
  
  </div>
);
}

export const ExplainerCard = () => {
  const size = useScreenSize();
  const QualsCells = () => {
    const qualCells = [
      {
        title: "🎓 Master's in AI",
        description: (
          <>
            <span className={styles.highlight}>UC</span> (In progress)
          </>
        ),
      },
      {
        title: "🎓 Bachelor of Science",
        description: (
          <>
            <span className={styles.highlight}>Computer Science</span>
          </>
        ),
      },
      {
        title: "🛠️ 5+ Years as IT Administrator",
        description: "Specialized in enterprise environments",
      },
      {
        title: "🛠️ Expertise in IT Tools",
        description: "M365, Entra, Intune, Google Admin",
      },
    ];
  
    return qualCells.map((cell, index) => (
      <div key={index} className={styles.qualcell}>
        <h4>{cell.title}</h4>
        <p>{cell.description}</p>
      </div>
    ));
  };
  
  return (
    <div className={`${styles.explainer} ${styles.card}`}>
      <div className={styles.card_title}>
        <h2>Hey, I'm Noah! 👋</h2>
      </div>

      <div className={styles.dotDivider}></div>
      <h3>Main</h3>
      <div className={clsx(styles.qualsContainer, size != "sm" ? styles.long : styles.compact)}>
   
        {QualsCells()}
        
  {/* <HorizontalScroller items={QualsCells()}/> */}
  </div>
  <br/>
  <div className={styles.dotDivider}></div>
    {/* <HorizontalScroller items={QualsCells()}/> */}
      <div className={styles.tagsSection}>
        <h3>Languages & Frameworks</h3>
        <div className={styles.tags}>
          <span className={styles.tag}>Python</span>
          <span className={styles.tag}>Java</span>
          <span className={styles.tag}>JavaScript</span>
          <span className={styles.tag}>C#</span>
          <span className={styles.tag}>React</span>
          <span className={styles.tag}>CSS</span>
          <span className={styles.tag}>C</span>
          <span className={styles.tag}>C++</span>
          <span className={styles.tag}>R</span>
        </div>

        <h3>Tools & Libraries</h3>
        <div className={styles.tags}>
          <span className={styles.tag}>TensorFlow</span>
          <span className={styles.tag}>Pandas</span>
          <span className={styles.tag}>SQL</span>
          <span className={styles.tag}>Spark</span>
          <span className={styles.tag}>PyTorch</span>
        </div>

        <h3>Cloud & IT Tools</h3>
        <div className={styles.tags}>
          <span className={styles.tag}>M365</span>
          <span className={styles.tag}>Entra</span>
          <span className={styles.tag}>Intune</span>
          <span className={styles.tag}>Google Admin</span>
          <span className={styles.tag}>Azure</span>
          <span className={styles.tag}>Windows Server</span>
        </div>
      </div>

      <div className={styles.dotDivider}></div>

      {/* GitHub Link Section */}
      <div className={styles.card_content}>
        <p>
          Want to see what I've been working on? Check out my work on{" "}
          <a className={styles.highlight} href="https://github.com/2of" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{" "}
          💼. More projects will be added here soon! ✨
        </p>
      </div>
    </div>
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


  export const BriefAboutCard = () => {
    return (
      <div className={styles.briefaboutcell}>
        <div className={styles.avatarWrapper}>
          <img
            src="https://picsum.photos/150"
            alt="Avatar"
            className={styles.avatar}
          />
          <div className={styles.content}>
            <h3>Noah's Site</h3>
            <p>
              Hiya, this is just my personal website. There's a bunch of odds and ends in /dir. 
              The site iteself is all hand done (no handy REACT libs for us!)
              It's a WIP but go ahead and have a looksie.

              Also /nonsense has all of the random widgets on one page... for fun!

            
            </p>
           
          </div>
        </div>
      </div>
    );
  };
  