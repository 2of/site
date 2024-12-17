import React from "react";
import Carousel from "./Carousel";
import styles from "./FeaturedItemGalleryView.module.scss";
import fallbackImage from "../res/404.png"; // Import fallback image

export const FeaturedItemGalleryView = ({ data }) => {
  const {
    title,
    tags,
    description,
    timeTaken,
    date,
    image,
    author,
    importantLinks,
    images = [], // Default to empty array if images aren't provided
  } = data;

  // Fallback image handling
  const displayImages = images.length > 0 ? images : [fallbackImage];

  return (
    <div className={styles.FeaturedContainer}>
      {/* Title Section */}

      <div className={styles.Left}>
        <div className={styles.TitleSection}>
          <h2 className={styles.Title}>{title}</h2>
          <p className={styles.Author}>
            By <strong>{author || "Unknown Author"}</strong>
            {date && ` | ${date}`}
            {timeTaken && ` | `}
            <em>{timeTaken}</em>
          </p>
        </div>

        {/* Tags Section */}
        {tags?.length > 0 && (
          <div className={styles.TagsSection}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.Tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Carousel Section */}

        {/* Description Section */}
        <div className={styles.DescriptionSection}>
          <p>{description}</p>
        </div>

        {/* Important Links */}
        {importantLinks && (
          <div className={styles.LinksSection}>
            {Object.entries(importantLinks).map(([key, value], index) => (
              <a
                key={index}
                href={value}
                className={styles.Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {key}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className={styles.Right}>
        <div className={styles.CarouselSection}>
          <Carousel images={displayImages} />
        </div>
        <button className={styles.CTA}>
          Go
        </button>
      </div>
    </div>
  );
};
