// import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import useFetch from "../../service/useFetch";
import Carrousel from "../../components/Carrousel";

const FicheLogement = () => {
  const { data, isLoading, error } = useFetch(`/assets/logements.json`);
  const { id } = useParams();
  const logement = data.find((accomodation) => accomodation.id === id);
  const logementError = data.find((accomodation) => !accomodation.id === id);

  if (!isLoading && !error) {
    return (
      <div>
        <Carrousel logement={logement} />
        <section>
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
          <ul>
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} />
        </section>

        <div className="article-container">
          <article>
            <div className="collapse">
              <h4>Description</h4>
              <button>ok</button>
            </div>

            <p>{logement.description}</p>
          </article>

          <article>
            <div className="collapse">
              <h4>équipements</h4>
              <button>ok</button>
            </div>

            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    );
  } else;
};

export default FicheLogement;
