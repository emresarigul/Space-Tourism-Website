import React, { useContext } from "react";
import "../style/Header.css";
import logo from "../assets/shared/logo.svg";
import Navigation from "./Navigation";
import hamburgerMenu from "../assets/shared/icon-hamburger.svg";
import { PageContexts } from "../context/context";

const Header = () => {
  const { navActive, setNavActive } = useContext(PageContexts);

  const MobileNavHandler = () => {
    setNavActive(!navActive);
  };

  return (
    <div className="header-wrapper">
      <div className="header-items">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <Navigation MobileNavHandler={MobileNavHandler} />
        <div className="hamburger-menu" onClick={MobileNavHandler}>
          <img src={hamburgerMenu} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
