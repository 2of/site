import React from "react";
import styles from "./PageTransitionViewforTikTokPage.module.scss";
import clsx from "clsx";
import { useGlobalContext } from "../contexts/globalcontext";

export const PageTransitionViewforTikTokPage = ({
  kind = "Black",
  where = "top",
}) => {
  const { isDarkMode, toggleTheme } = useGlobalContext();

  if (where === "top") {
    return (
      <>
        {kind === "Black" && (
          <div
            className={clsx(
              styles.transitionGradientContainer,
              styles.blackTopGradient
            )}
          />
        )}
        {kind === "tonav" && <div className={styles.tonavTopGradient} />}
        {kind === "afterland" && isDarkMode && (
          <div
            className={clsx(
              styles.transitionGradientContainer,
              styles.blackTopGradient
            )}
          >
            <div className={styles.land} />
            <div className={styles.water} />
          </div>
        )}

        {kind === "afterland" && !isDarkMode && (
          <div
            className={clsx(
              styles.transitionGradientContainer,
              styles.lightLandGradient
            )}
          >
            <div className={styles.border} />
            {/* test */}
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        {kind === "Black" && <div className={styles.blackBottomgradient} />}
        {kind === "test" && <div className={styles.blackBottomgradient} />}
        {kind === "tonav" && <div className={styles.tonavBottomGradient} />}
      </>
    );
  }
};
