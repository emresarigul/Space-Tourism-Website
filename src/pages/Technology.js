import React from "react";
import Technologies from "../components/Technologies";
import "../style/Technology.css";

const Technology = () => {
  return (
    <div className="tech-container">
      <div className="technology-wrapper">
        <div className="technology-first-text">
          <span>03</span> Space Launch 101
        </div>
        <Technologies />
      </div>
    </div>
  );
};

export default Technology;
