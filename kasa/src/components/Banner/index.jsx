import React from "react";
import "./style.scss";

const Banner = ({ title, image }) => {
  return (
    <div className="banner">
      <img className="banner-image" src={image} alt="okok" />
      <h1 className="titleBanner">{title}</h1>
    </div>
  );
};

export default Banner;

// style={{ backgroundImage: `url(${image})` }}
