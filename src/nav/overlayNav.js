import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './overlaynav.module.scss';

export const OverlayNav = ({ routes, location, clickHandler, display, BottomComponent }) => {
  const [isVisible, setIsVisible] = useState(display);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (display) {
      setIsVisible(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setIsVisible(false);
      }, 600); // Match the CSS animation duration
      return () => clearTimeout(timer);
    }
  }, [display]);

  if (!isVisible && !isAnimating) return null;

  return (
    <div className={`${styles.overlayNav} ${display ? styles.show : styles.hide}`}>
      <div className={styles.navGrid}>
        {routes.map((route, index) =>
          route.showInNav ? (
            <Link to={route.path} key={index} onClick={clickHandler}>
              <div
                className={`${styles.navItem} ${location.pathname === route.path ? styles.active : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={styles.label}>{route.label}</span>
              </div>
            </Link>
          ) : null
        )}
      </div>

      <div className={`${styles.divider} ${display ? "" : styles.hide}`}></div>

      {BottomComponent && (
        <div className={`${styles.bottomComponent} ${display ? "" : styles.hide}`}>
          <BottomComponent />
        </div>
      )}
    </div>
  );
};