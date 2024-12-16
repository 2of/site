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
    image,
    description,
    id,
    extraImages = [],
  } = project;

  // Fallback image if no image is provided (for both main and extra images)
  const projectImage = image || require("../res/404.png"); // Ensure path is correct

  // Fallback for extra images
  const fallbackExtraImages = [projectImage]; // Use projectImage as fallback for extra images

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
            <Carousel
              images={
                extraImages.length > 0 ? extraImages : fallbackExtraImages
              }
            />
          </div>
        </div>

        {/* PaddingImage container */}

        <div
          className={`${styles.PaddingImage} ${
            paddingFlag ? styles.padright : ""
          }`}
        >
          <div className={styles.patternBackground}></div>
        </div>
      </div>
    </>
  );
};
