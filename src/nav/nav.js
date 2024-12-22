import React, { memo, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // For routing and active link detection
import routes from "../routes"; // Importing routes
import "../styles/nav.scss"; // Import SCSS for styling
import logo from "../res/logo512.png";
import { useGlobalContext } from "../contexts/globalcontext"; // Import global context
import DarkModeToggle from "../components/darkmodetoggle";
import { ContainerNav } from "./containernav";
import { NavLink } from "react-router-dom";
import useScreenSize from "../tools/screensize";
import { Logo } from "../components/Logo";
import clsx from "clsx";
import { OverlayNav } from "./overlayNav";
import { Footer } from "../components/Footer";

function SocialMediaNavContainer() {
  return (
    <div className="SocialMediaNavContainer">
      {/* Social Links */}
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <span className="separator">•</span>
      {/* Separator */}
      <DarkModeToggle />
      {/* Dark Mode Toggle */}{" "}
    </div>
  );
}


const Links = ({ routes, location, clickHandler }) => {
    return (
      <ul className="nav-links">
        {routes.map((route, index) =>
          route.showInNav ? (
            <Link to={route.path} key={index} onClick={clickHandler}>
              <li className={location.pathname === route.path ? "active" : ""}>
                <span
                  className={`prefix ${
                    location.pathname === route.path ? "show" : ""
                  }`}
                >
                  ./
                </span>
                <span className="label">{route.label}</span>
              </li>
            </Link>
          ) : null
        )}
      </ul>
    );
  };
  
const Nav2 = () => {
  const screenSize = useScreenSize();
  const location = useLocation();
  const { isblurPage, setBlurPage } = useGlobalContext(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMenuOpenforNav, setisMenuOpenforNav } = useGlobalContext(true);


//   const [isMenuOpenforNav, setisMenuOpenforNav] = useState(true);



  const currentRoute = routes.find((route) => route.path === location.pathname);
  const transparentNav = currentRoute?.transparentNav || false; // Use 'false' as a fallback
  const toggleMenu = () => {
    setisMenuOpenforNav((prevState) => {
      const newState = !prevState; // Compute the new state
      setBlurPage(!newState); // Use the opposite value for blurPage
      return newState;
    });
  };


  const handleNavLinkClick = () => {
    setisMenuOpenforNav((prevState) => !isMenuOpenforNav);
    setBlurPage(true);
  };



  const HamburgerButton = ({ menuOpen, toggleMenu, buttontype, isOpen }) => {
    return (
      <div
        className={`hamburger-button ${menuOpen ? "open" : ""}`}
        onClick={() => toggleMenu()}
      >


{isOpen ? "Close" : "Menu"}
        {"  "}
        <i className="fa-solid fa-bars"></i> 

      </div>
    );
  };

 


  const navClass = clsx("navContainer", {
    "Lg_nav": screenSize === "lg",
    "Md_nav": screenSize === "md",
    "Sm-nav-opaque": screenSize === "sm" && !transparentNav,
    "Sm-nav-transparent": screenSize === "sm" && transparentNav,
  });
  console.log("RENDER WHOLE");
  return (
    <>
      <div className={navClass}>
        <div className="MenuBar">
          <Logo /> <Links routes={routes} location={location} />

          <HamburgerButton menuOpen={isMenuOpenforNav} toggleMenu={toggleMenu} isOpen={isMenuOpenforNav}/>
          <div className="SocialsSection">
            <SocialMediaNavContainer />
          </div>
          {/* <SocialMediaNavContainer /> */}
        </div>
        <OverlayNav routes={routes} location={location} clickHandler={handleNavLinkClick}  display={isMenuOpenforNav} BottomComponent={Footer}/>
     
        <div
          className={`ExpandedMenuSection ${
            isMenuOpenforNav ? "MenuOpen" : "MenuClosed"
          }`}
        >


          {/* <Links routes={routes} location={location} clickHandler={handleNavLinkClick} /> */}
          
         </div>
      </div>
    </>
  );
};

export default Nav2;
