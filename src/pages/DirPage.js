import React from "react";
import routes from "../routes";  // Importing routes from your routes.js
import styles from "./DirPage.module.scss";  // Ensure the path is correct // Importing the SCSS module

export const DirPage = () => {
  return (
    <div className={styles.phonebookContainer}>
    <h1>./dir (or $ls for the better amongst us)</h1>/h1>
    <h2>I keep a lot of junk on this page so, hey a handy dir for forgetting the paths</h2>
    <div className={styles.phonebook}>
      {routes
        .filter(route => route.showlinks)  // Filter routes that should be shown
        .map((route, index) => (
          <div key={index} className={styles.phonebookCard}>
            <h2>{route.label}</h2>
            <p>Path: {route.path}</p>
            <a href={route.path} className={styles.phonebookLink}>
              Go to {route.label}
            </a>
          </div>
      ))}
    </div>
  </div>
  );
};