import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Nav from "../nav/nav";
import routes from "../routes";
import styles from "../styles/LayoutMain.module.scss";
import { useGlobalContext } from "../contexts/globalcontext";
import { Footer } from "../components/Footer";

const LayoutMain = () => {
  const location = useLocation();
  const currentRoute = routes.find((route) => route.path === location.pathname);
  const showLinks = currentRoute?.showlinks || false;
  const { isBlurPage } = useGlobalContext();

  return (
    <div className={styles.layoutMain}>
      {showLinks && (
        <div className={styles.navArea}>
          <Nav />
        </div>
      )}

      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 0 }} // Disable exit animation
          classNames="pageTransition"
        >
          <div
            className={`${styles.pageContainer} ${
              showLinks ? styles.withPadding : ""
            } ${!isBlurPage ? styles.blurAll : ""}`}
          >
            <Outlet />

          </div>
        </CSSTransition>
      </TransitionGroup>

      {/* Conditionally render the footer if showLinks is true */}
      {showLinks && (
        <footer className={styles.footer}>
      <Footer/>
        </footer>
      )}
    </div>
  );
};

export default LayoutMain;
