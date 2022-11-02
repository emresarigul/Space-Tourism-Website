import React, { useState } from "react";
import douglas from "../assets/crew/image-douglas-hurley.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import data from "../data.json";

const CrewMembers = () => {
  const crewArr = [douglas, mark, victor, anousheh];
  const dotArr = ["first", "second", "third", "fourth"];
  const [crewIndex, setCrewIndex] = useState(0);

  return (
    <>
      <div className="crew-members-wrapper">
        <div className="crew-members-text-area">
          <div className="crew-member-title">{data.crew[crewIndex].role}</div>
          <div className="crew-member-name">{data.crew[crewIndex].name}</div>
          <div className="crew-member-description">
            <p>{data.crew[crewIndex].bio}</p>
          </div>
          <div className="crew-index-dots">
            {dotArr.map((dots, index) => {
              return (
                <div
                  key={index}
                  className={`dot ${
                    (dots, crewIndex === index ? "active" : "")
                  }`}
                  onClick={() => {
                    setCrewIndex(index);
                  }}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="crew-members-image-area">
          <img src={crewArr[crewIndex]} alt="" />
        </div>
      </div>
    </>
  );
};

export default CrewMembers;
