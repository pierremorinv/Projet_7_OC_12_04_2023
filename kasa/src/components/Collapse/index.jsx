import React from "react";
import "./style.scss";
import vectorUp from "../../assets/vectorUp.png";
import vectordown from "../../assets/vectorDown.png";

const Collapse = ({ logement }) => {
  return (
    <div className="collapse-container">
      <article className="collapse-description">
        <div className="collapse">
          <p>Description</p>
          <button>
            <img src={vectorUp} alt="vectorUp" />
          </button>
        </div>

        <p>{logement.description}</p>
      </article>

      <article className="collapse-description">
        <div className="collapse">
          <p>équipements</p>
          <button>
            <img src={vectorUp} alt="vectorUp" />
          </button>
        </div>

        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Collapse;
