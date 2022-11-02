import React from "react";

const Planets = ({ name, planetIndex, setPlanetIndex, indexPlanet }) => {
  return (
    <div
      onClick={() => {
        setPlanetIndex(indexPlanet);
      }}
      className={`planets-nav ${
        planetIndex === indexPlanet ? "active-planet" : ""
      }`}
    >
      {name}
    </div>
  );
};

export default Planets;
