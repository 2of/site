import React from "react";
import clsx from "clsx";
import styles from './GalleryTemplate.module.scss';

const GalleryTemplate = ({ header, posts }) => {
  return (
    <div className={clsx(styles.galleryTemplate, "standard_bg_pattern")}>
      <header className={styles.header}>{header}</header>
      <main className={styles.mainContent}>
        <div className={styles.blogPosts}>
          {posts.map((PostComponent, index) => (
            <div key={index} className={styles.blogPostWrapper}>
              {PostComponent}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default GalleryTemplate;