import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/Navigation.css";
import iconClose from "../assets/shared/icon-close.svg";
import { PageContexts } from "../context/context";

const Navigation = ({ MobileNavHandler }) => {
  const { navActive, setNavActive, setNavIndex } = useContext(PageContexts);

  const navItems = [
    {
      pageName: "HOME",
      url: "/",
    },
    {
      pageName: "DESTINATION",
      url: "/destinations",
    },
    {
      pageName: "CREW",
      url: "/crew",
    },
    {
      pageName: "TECHNOLOGY",
      url: "/technology",
    },
  ];

  const location = useLocation();

  useEffect(() => {
    setNavActive(false);
    if (location.pathname === "/") {
      document.body.className = "home-page";
    } else if (location.pathname === "/destinations") {
      document.body.className = "destination-page";
    } else if (location.pathname === "/crew") {
      document.body.className = "crew-page";
    } else if (location.pathname === "/technology") {
      document.body.className = "technology-page";
    }
  }, [setNavActive, location.pathname]);

  return (
    <div className={`nav ${navActive ? "active" : ""}`}>
      <div className="nav-close" onClick={MobileNavHandler}>
        <img src={iconClose} alt="" />
      </div>
      <ul>
        {navItems.map((nav, index) => {
          return (
            <li
              key={index}
              className={`nav-items ${
                nav.url === location.pathname ? "active" : "not-active"
              }`}
              onClick={() => {
                setNavIndex(index);
              }}
            >
              <Link to={`${nav.url}`}>
                <span>{`0${index}`}</span> {` ${nav.pageName}`}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="background-blur"></div>
    </div>
  );
};

export default Navigation;
