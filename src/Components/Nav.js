import React from "react";
import Navbar from "@acto/react-navbar";
import { FaSignOutAlt, FaSuitcaseRolling } from "react-icons/fa";
import "./css/Nav.css";

const navTheme = {
  mainColor: "#000000",
  menuBgColor: "#FFFFFF",
};

const navBrand = (
  <img className="nav-logo" alt="logo" src={require("../images/logo.jpg")} />
);

const rightLinks = (
  <>
    <a href={"#/"} className="plan">
      {" "}
      <span className="mera-span"><FaSuitcaseRolling /></span>Make a Plan
    </a>
    <a href={"#/"} className="login">
      <span className="icons"><FaSignOutAlt /></span>Login/Sign In
    </a>
  </>
);

const Nav = () => {
  return (
    <div className="main-navbar">
      <Navbar
        className="navbar" 
        menuClassName="navbar--menu" 
        brand={navBrand}
        theme={navTheme}
        rightLinks={rightLinks}
      />
    </div>
  );
};

export default Nav;
