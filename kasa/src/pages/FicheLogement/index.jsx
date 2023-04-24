// import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.scss";
import useFetch from "../../service/useFetch";
import Collapse from "../../components/Collapse";
import SlideShow from "../../components/SlideShow";
import Tag from "../../components/Tag";
import Rate from "../../components/Rate";
import { useEffect } from "react";
import Loader from "../../components/Loader";

const FicheLogement = () => {
  const { data, isLoading, error } = useFetch(`/assets/logements.json`);
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = data.find((accomodation) => accomodation.id === id);
  console.log(logement);

  useEffect(() => {
    if ((!logement && !isLoading) || error) {
      navigate("/error");
    }
  }, [error, isLoading, logement, navigate]);

  if (isLoading) {
    return <Loader />;
  }
  if (logement) {
    return (
      <>
        <SlideShow pictures={logement.pictures} />
        <section className="presentation">
          <div>
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
            <Tag tags={logement.tags} />
          </div>
          <div className="host-star">
            <div className="host">
              <p className="host-name">{logement.host.name}</p>
              <img
                className="host-img"
                src={logement.host.picture}
                alt={logement.host.name}
              />
            </div>
            <Rate rating={logement.rating} />
          </div>
        </section>
        <div className="collapse-container-fiche-logement">
          <Collapse content={logement.description} title={"Description"} />
          <Collapse
            content={logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
            title={"Équipements"}
          />
        </div>
      </>
    );
  }
};
export default FicheLogement;
