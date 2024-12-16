import React from "react";
import clsx from "clsx";
import styles from "./GalleryTemplate.module.scss";

const GalleryTemplate = ({ header, posts }) => {
  return (

      <div className={styles.CellContainer}>
        <header className={clsx(styles.header, styles.FullPageForMobile)}>
          {header}
        </header>
        {posts.map((PostComponent, index) => (
          <div
            key={index}
            className={clsx(styles.Cell, styles.FullPageForMobile)}
          >
            {PostComponent}
          </div>
        ))}
      </div>

  );
};

export default GalleryTemplate;