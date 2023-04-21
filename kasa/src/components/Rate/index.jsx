import React from "react";
import "./style.scss";
import starFull from "../../assets/starFull.png";
import starEmpty from "../../assets/starEmpty.png";

const Rate = ({ rating }) => {
  return (
    <div className="stars">
      <span className="starEmpty">
        <img src={starEmpty} alt="star"></img>
      </span>
      <span className="starEmpty">
        <img src={starEmpty} alt="star"></img>
      </span>
      <span className="starEmpty">
        <img src={starEmpty} alt="star"></img>
      </span>
      <span className="starEmpty">
        <img src={starEmpty} alt="star"></img>
      </span>
      <span className="starEmpty">
        <img src={starEmpty} alt="star"></img>
      </span>
    </div>
  );
};

export default Rate;
