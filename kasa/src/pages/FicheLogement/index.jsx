// import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.scss";
import useFetch from "../../service/useFetch";
import Collapse from "../../components/Collapse";
import SlideShow from "../../components/SlideShow";
import Tag from "../../components/Tag";
import Rate from "../../components/Rate";

const FicheLogement = () => {
  const { data, isLoading, error } = useFetch(`/assets/logements.json`);
  const { id } = useParams();
  // const navigate = useNavigate();
  const logement = data.find((accomodation) => accomodation.id === id);

  // if (!logement) {
  //   navigate("/error");
  // }
  if (logement && !isLoading && !error) {
    return (
      <div>
        <SlideShow pictures={logement.pictures} />
        <section className="presentation">
          <div>
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
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
        <div className="tag-rates">
          <Tag tags={logement.tags} />
          <Rate rating={logement.rating} />
        </div>
        <div className="collapse-container-fiche-logement">
          <Collapse content={logement.description} title={"Description"} />
          <Collapse
            content={logement.equipments.map((equipment, index) => (
              <p key={index}>{equipment}</p>
            ))}
            title={"Équipements"}
          />
        </div>
      </div>
    );
  }
};

export default FicheLogement;
