import React from "react";
import "./style.scss";

const Banner = ({ title, className }) => {
  return (
    <div className={`banner ${className}`}>
      <h1 className="titleBanner">{title}</h1>
    </div>
  );
};

export default Banner;
