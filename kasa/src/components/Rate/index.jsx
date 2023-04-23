import React from "react";
import "./style.scss";
import starRedImg from "../../assets/starFull.png";
import starGreyImg from "../../assets/starEmpty.png";

const Rate = ({ rating }) => {
  const starRed = Array.from({ length: rating }, (star, index) => (
    <img className="red-star" src={starRedImg} alt="redStar" key={index}></img>
  ));
  const emptyStar = Array.from({ length: 5 - rating }, (star, index) => (
    <img className="empty-star" src={starGreyImg} alt="greyStar" key={index} />
  ));
  console.log(rating);
  console.log(starRed);
  console.log(emptyStar);

  return (
    <div className="stars">
      {starRed}
      {emptyStar}
    </div>
  );
};

export default Rate;
