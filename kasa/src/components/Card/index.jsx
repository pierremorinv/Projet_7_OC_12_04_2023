import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Card = ({ accomodation }) => {
  return (
    <Link to={`/fiche-logement/${accomodation.id}`} className="thumb">
      <img className="thumb-img" src={accomodation.cover} alt="Kasa" />

      <p className="thumb-title">{accomodation.title}</p>
    </Link>
  );
};

export default Card;
