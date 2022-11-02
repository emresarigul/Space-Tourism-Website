import React from "react";
import "../style/Crew.css";
import CrewMembers from "../components/CrewMembers";

const Crew = () => {
  return (
    <div className="container">
      <div className="crew-wrapper">
        <div className="crew-first-text">
          <span>02</span> Meet Your Crew
        </div>
        <CrewMembers />
      </div>
    </div>
  );
};

export default Crew;
