import React from "react";
import styles from "./ZuneTextBg.module.scss"; // Assuming your SCSS is here
import clsx from "clsx";

// Define a list of predefined colors
const colorOptions = {
  default: "var(--accent-color)", // Default color
  red: "rgba(255, 0, 0, 0.5)",
  blue: "rgba(0, 0, 255, 0.5)",
  green: "rgba(0, 255, 0, 0.5)",
  yellow: "rgba(255, 255, 0, 0.5)",
  purple: "rgba(128, 0, 128, 0.5)",
  orange: "rgba(255, 165, 0, 0.5)",
  pink: "rgba(255, 105, 180, 0.5)",
  brown: "rgba(165, 42, 42, 0.5)",
  gray: "rgba(169, 169, 169, 0.5)",
};

export const ZuneTextBG = ({ text = "hello!", blur = false, color = "default" }) => (
  <div
    className={clsx(
      styles.floatingTextBackgroundWrapper,
      blur ? styles.legibilityfilter : ""
    )}
    style={{ "--zune-text-bg-color": colorOptions[color] || colorOptions.default }} // Set color based on prop
  >
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