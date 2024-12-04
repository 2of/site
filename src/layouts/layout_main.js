// /layouts/layout_main.js
import React from "react";
import Nav from "../nav/nav";
import { Outlet } from "react-router-dom";

const LayoutMain = ({ children }) => { 
    return (
    <>
      <Nav/>

      {children} {/* This will render the specific route element */}
    </>
    )
}

export default LayoutMain;