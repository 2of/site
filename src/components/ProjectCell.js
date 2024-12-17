import React from "react";
import styles from "./ProjHeroCard.module.scss";
import Carousel from "./Carousel"; // Import Carousel component

export const ProjHeroCard = ({ project, layoutFlag, ishighlight = false }) => {
  if (!project) {
    console.log(project);
    return <div className={styles.error}>No project data available.</div>;
  }

  // Destructuring with default values
  const {
    title,
    date,
    author,
    timeTaken,
    tags = [],
    images = [],
    description,
    id,
  } = project;

  // Fallback image array if no images are provided
  const projectImages = images.length > 0 ? images : [require("../res/404.png")];

  // Check if the ID is even or odd and set padding flag accordingly
  const paddingFlag = id % 2 === 0;

  return (
    <>
      <div className={`${paddingFlag ? styles.padleft : styles.padright}`}>
        <div
          className={`${styles.container} ${
            ishighlight ? styles.highlightedproj : ""
          } ${layoutFlag ? styles.altLayout : ""} `}
        >


<div
  className={styles.background}
  style={{
    background: images
      ? `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url(${images[0]})`
      : 'linear-gradient(to bottom, rgba(0, 0, 0,1) 50%, rgba(0, 0, 0, 1) 50%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Background content (can be an image, gradient, etc.) */}
</div>



          <div className={styles.leftSection}>
            <div className={styles.header}>
              <h2 className={styles.title}>{title}</h2>
              <div className={styles.metaInfo}>
                <span className={styles.date}>
                  {new Date(date).toLocaleDateString()}
                </span>
                <span className={styles.author}>
                  By: {author || "Unknown Author"}
                </span>
                <span className={styles.timeTaken}>
                  Time Taken: {timeTaken || "N/A"}
                </span>
              </div>
            </div>
            <div className={styles.techUsed}>
              <h3>Technologies Used</h3>
              <ul>
                {tags.map((tag, index) => (
                  <li key={index} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.content}>
              <div className={styles.description}>
                <p>{description}</p>
                <div className={styles.footer}>
                  <a
                    href={`/projects/${id}`}
                    className={styles.cta}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightSection}>
            <Carousel images={projectImages} />
          </div>
        </div>
      </div>
    </>
  );
};