// Footer.js
import React from "react";
import styles from "./Footer.module.scss"; // Import the styles

export const Footer = ({ text = "placeholder" }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          © 2024 Noah King. All rights reserved. ✨ <br />
          Thanks for visiting! 🚀 Explore, learn, and feel free to{" "}
          <a href="mailto:your.nhking4@gmail.com" className={styles.contactLink}>
            contact me
          </a>. <br />
          This site is my personal space with tools for everyday use—no warranties. 😉
          <br />
          Enjoy! 🌟
        </p>
        <div className={styles.socialLinks}>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialLink} ${styles.twitter}`}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialLink} ${styles.github}`}
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialLink} ${styles.linkedin}`}
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
