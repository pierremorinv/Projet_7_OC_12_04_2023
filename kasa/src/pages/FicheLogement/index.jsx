// import React, { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import "./style.scss";
import useFetch from "../../service/useFetch";
import Collapse from "../../components/Collapse";
import SlideShow from "../../components/Carrousel";

const FicheLogement = () => {
  const { data, isLoading, error } = useFetch(`/assets/logements.json`);
  const { id } = useParams();
  const logement = data.find((accomodation) => accomodation.id === id);

  if (!isLoading && !error) {
    return (
      <div>
        <SlideShow pictures={logement.pictures} />
        <section className="presentation">
          <div>
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
            <ul className="tags">
              {logement.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className="host">
            <p className="host-name">{logement.host.name}</p>
            <img
              className="host-img"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
        </section>
        <Collapse
          description={logement.description}
          equipments={logement.equipments}
        />
      </div>
    );
  } else if (!logement) {
    redirect("*");
  }
};

export default FicheLogement;
