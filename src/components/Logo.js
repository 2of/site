
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../res/logo512.png";
import { useGlobalContext } from "../contexts/globalcontext";

export const Logo = () => {

  const { isblurPage, setBlurPage } = useGlobalContext(true);

  const { isMenuOpenforNav, setisMenuOpenforNav } = useGlobalContext(true);
  const navLogoStyle = {
    textDecoration: 'none', // Remove underline
    color: 'inherit', // Inherit color from parent
    display: 'flex',
    alignItems: 'center', // Align logo and text vertically
    maxWidth: '200px'
  };

  const logoStyle = {
    width: '40px', // Adjust as needed
    height: 'auto',
    marginRight: '10px',
  };

  const navLogoTextContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
  };

  const navTitleStyle = {
    fontSize: '1.2rem',
  };

  const navSubtitleStyle = {
    fontSize: '0.8rem',
    // color: 'var(--muted-text-color)',
  };

  const handleClick = () => { 
    setisMenuOpenforNav(false)
    setBlurPage(true)
  }
  return (
    <NavLink to="/"  onClick={handleClick} className="LogoContainer" style={navLogoStyle}>
      <img src={logo} alt="Logo" className="logo" style={logoStyle} />
      <div className="nav-logo-text-container" style={navLogoTextContainerStyle}>
        <span className="nav-title" style={navTitleStyle}>2of.io</span>
        <span className="nav-subtitle" style={navSubtitleStyle}>noah's site</span>
      </div>
    </NavLink>
  );
};
