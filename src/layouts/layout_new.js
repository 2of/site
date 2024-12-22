import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import routes from "../routes";
import styles from "./layout_new.module.scss";
import { useGlobalContext } from "../contexts/globalcontext";
import { Footer } from "../components/Footer";
import Nav2 from "../nav/nav";
import useScreenSize from "../tools/screensize";
import clsx from "clsx";
const ResponsiveLayout = () => {
  const location = useLocation();
  const currentRoute = routes.find((route) => route.path === location.pathname);
  const reserveNav = !currentRoute.transparentNav;
  const { isBlurPage } = useGlobalContext();
  const screenSize = useScreenSize();

  return (
    <div className={styles.layoutMain}>
      <div
        className={clsx(
          styles.navArea,
          screenSize === "sm" && !reserveNav ? styles.nopad : styles.reserve
        )}
      >
        <Nav2 />
      </div>

      {/* {screenSize} {reserveNav ? "padd" : "dont pad"} */}
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 0 }} // Disable exit animation
          classNames="pageTransition"
        >
        <div
        className={clsx(
            styles.pageContainer,
            screenSize === "sm" && !reserveNav ? styles.nopad : styles.reserve,
            !isBlurPage && styles.blurAll
        )}
        >
                  {/* <h1>tests</h1> */}
            <Outlet />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default ResponsiveLayout;
