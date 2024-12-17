import React from "react";
import clsx from "clsx";
import styles from "./GalleryTemplate.module.scss";

import { ZuneTextBG } from "../components/ZuneText";

// Default Large Header layout
const DefaultLargeHeader = ({
  headertitle = "no title",
  headerdescr,
  headercomponent = {},
  featuredPost,
}) => (
  <header className={clsx(styles.LargeHeader)}>
    <div className={styles.headerContent}>
      {/* <span className={styles.FeaturedTitle}>{headertitle}</span> */}
      <h1>{headertitle}</h1>
      <div className={styles.headerDesc}>{headerdescr}</div>
      <div className={styles.headerCompContainer}></div>

      {featuredPost && (
        <>
          <span className={styles.FeaturedTitle}>Featured Post</span>
          <div
            className={clsx(
              styles.HighlightProjContainer,
              styles.FeaturedPostSpacing
            )}
          >
            {featuredPost}
          </div>
        </>
      )}
    </div>
  </header>
);



const GalleryTemplate = ({
  posts,
  featured_post = null,
  featured_index = -1,
  header_text,
  header_desc,
  header_comp = {},
}) => {
  return (
    <>
      {/* Desktop Header */}
      <div className={styles.DesktopHeader}>
        <DefaultLargeHeader
          headertitle={header_text}
          headerdescr={header_desc}
          headercomponent={header_comp}
          featuredPost={
            featured_post ||
            (featured_index !== -1 ? posts[featured_index] : null)
          }
        />
      </div>

      {/* Mobile Header */}
  

      {/* Main Post List */}
      <div className={styles.CellContainer}>
      <span className={styles.MainAreaTitle}>All Posts</span>
            
      <div className={clsx(styles.MobileHeader, styles.FullPageForMobile)}>
        <ZuneTextBG text={header_text} blur={true}>

          <h1> Scroll down!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quisquam dolores dolorem aspernatur est! Est.</p>
        </ZuneTextBG>

       
   
      </div>

    
        {posts.map((PostComponent, index) => (
          <div
            key={index}
            className={clsx(
              styles.Cell,
              styles.FullPageForMobile,
              index === featured_index && styles.FeaturedHidden
            )}
          >
            {PostComponent}
          </div>
        ))}
      </div>
    </>
  );
};

export default GalleryTemplate;
