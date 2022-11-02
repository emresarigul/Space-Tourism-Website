import React, { useState } from "react";
import vehicle from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceCapsule from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceport from "../assets/technology/image-spaceport-portrait.jpg";
import vehicleMobile from "../assets/technology/image-launch-vehicle-landscape.jpg";
import spaceCapsuleMobile from "../assets/technology/image-space-capsule-landscape.jpg";
import spaceportMobile from "../assets/technology/image-spaceport-landscape.jpg";
import data from "../data.json";

const Technologies = () => {
  const [techIndex, setTechIndex] = useState(0);
  const pageArr = [1, 2, 3];
  const techImgArr = [vehicle, spaceport, spaceCapsule];
  const techImgArrMobile = [vehicleMobile, spaceCapsuleMobile, spaceportMobile];

  return (
    <div className="technologies-wrapper">
      <div className="technologies-text-area">
        <div className="page-numbers-container">
          {pageArr.map((number, index) => {
            return (
              <div
                className={`page-number ${techIndex === index ? "active" : ""}`}
                key={index}
                onClick={() => {
                  setTechIndex(index);
                }}
              >
                {number}
              </div>
            );
          })}
        </div>
        <div className="tech-text-info">
          <div className="terminology">the terminology...</div>
          <div className="technology-name">
            {data.technology[techIndex].name}
          </div>
          <div className="technology-description">
            <p>{data.technology[techIndex].description}</p>
          </div>
        </div>
      </div>
      <div className="technologies-image-area">
        <img
          className="desktop-tech-images"
          src={techImgArr[techIndex]}
          alt=""
        />
        <img
          className="mobile-tech-images"
          src={techImgArrMobile[techIndex]}
          alt=""
        />
      </div>
    </div>
  );
};

export default Technologies;
