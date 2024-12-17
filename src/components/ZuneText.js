// ZuneTextBG.js
import React from "react";
import styles from "./ZuneTextBg.module.scss"; // Assuming your SCSS is here
import clsx from "clsx";

export const ZuneTextBG = ({ text = "hello!" , blur = false}) => (
  <div className={clsx(styles.floatingTextBackgroundWrapper, !blur ? styles.legibilityfilter : "" )}>
    <div className={styles.floatingTextBackground}>
      <div className={styles.floatingTextContent}>
        {/* Row 1 */}
        <div className={styles.floatingTextRow}>
          {[...Array(20)].map((_, i) => (
            <span key={`row1-${i}`}>{text} • </span>
          ))}
        </div>
        {/* Row 2 */}
        <div className={styles.floatingTextRow}>
          {[...Array(20)].map((_, i) => (
            <span key={`row2-${i}`}>{text} • </span>
          ))}
        </div>
        {/* Row 3 */}
        <div className={styles.floatingTextRow}>
          {[...Array(20)].map((_, i) => (
            <span key={`row3-${i}`}>{text} • </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);
