import React from "react";
import "./style.scss";

const Carrousel = ({ logement }) => {
  return (
    <div className="carrousel" style={{ background: logement.pictures[0] }}>
      <img
        className="carrousel-img"
        src={logement.pictures[0]}
        alt={logement.title}
      />
      <p>salut</p>
    </div>
  );
};

export default Carrousel;
