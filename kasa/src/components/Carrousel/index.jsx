import React, { useState } from "react";
import "./style.scss";
import arrowRight from "../../assets/vectorRight.png";
import arrowLeft from "../../assets/vectorLeft.png";

const Carrousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstPicture = currentIndex === 0;
    const newIndex = isFirstPicture ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastPicture = currentIndex === pictures.length - 1;
    const newIndex = isLastPicture ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  console.log(pictures);
  return (
    <div className="carrousel">
      <div
        className="carrousel-img"
        style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
      >
        <button className="arrow-left" onClick={goToPrevious}>
          <img src={arrowLeft} alt="vector-left" />
        </button>
        <button className="arrow-right" onClick={goToNext}>
          <img src={arrowRight} alt="vector-right" />
        </button>
        {pictures.length <= 1 ? null : (
          <p className="carrousel-counter">
            {currentIndex + 1}/{pictures.length}
          </p>
        )}
      </div>
    </div>
  );
};

export default Carrousel;
