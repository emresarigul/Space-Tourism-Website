import React, { useState } from "react";
import "../style/Destinations.css";
import data from "../data.json";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import europa from "../assets/destination/image-europa.png";
import titan from "../assets/destination/image-titan.png";
import Planets from "../components/Planets";

const Destinations = () => {
  const [planetIndex, setPlanetIndex] = useState(0);
  const planetArr = [moon, mars, europa, titan];
  return (
    <div className="container">
      <div className="destinations-wrapper">
        <div className="planet-image-area">
          <div className="first-text">
            <span>01</span> Pick your destination
          </div>
          <div className="planet-image">
            <img src={planetArr[planetIndex]} alt="" />
          </div>
        </div>
        <div className="planet-text-area">
          <div className="planets">
            {data.destinations.map((planets, index) => {
              return (
                <Planets
                  setPlanetIndex={setPlanetIndex}
                  planetIndex={planetIndex}
                  key={index}
                  indexPlanet={index}
                  {...planets}
                />
              );
            })}
          </div>
          <div className="planet-name">
            {data.destinations[planetIndex].name}
          </div>
          <div className="planet-description">
            <p>{data.destinations[planetIndex].description}</p>
          </div>
          <div className="planet-distance-travel-container">
            <div className="planet-distance">
              AVG. DISTANCE
              <p>{data.destinations[planetIndex].distance}</p>
            </div>
            <div className="planet-travel-time">
              EST. TRAVEL TIME
              <p>{data.destinations[planetIndex].travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
