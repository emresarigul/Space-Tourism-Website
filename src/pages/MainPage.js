import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../style/MainPage.css";
import { PageContexts } from "../context/context";

const MainPage = () => {
  const { setNavIndex } = useContext(PageContexts);
  return (
    <div className="container">
      <div className="main-page-wrapper">
        <div className="main-text-area">
          <div className="first-text">
            <p>So, you want to travel to</p>
          </div>
          <div className="heading">SPACE</div>
          <div className="description">
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <div className="main-cta-btn">
          <Link
            onClick={() => {
              setNavIndex(1);
            }}
            to="/destinations"
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
