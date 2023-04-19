import React, { useState } from "react";
import "./style.scss";
import vectorUp from "../../assets/vectorUp.png";
import vectordown from "../../assets/vectorDown.png";

const Collapse = ({ description, equipments }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="collapse-container">
      {isOpen ? (
        <article className="collapse-description">
          <div className="collapse">
            <p>Description</p>

            <button onClick={() => setIsOpen(false)}>
              <img src={vectorUp} alt="vectorUp" />
            </button>
          </div>
          <p>{description}</p>
        </article>
      ) : (
        <article className="collapse-description">
          <div className="collapse">
            <p>Description</p>
            <button onClick={() => setIsOpen(true)}>
              <img src={vectordown} alt="vectorDown" />
            </button>
          </div>
        </article>
      )}
      {isOpen ? (
        <article className="collapse-description">
          <div className="collapse">
            <p>équipements</p>
            <button onClick={() => setIsOpen(false)}>
              <img src={vectorUp} alt="vectorUp" />
            </button>
          </div>

          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </article>
      ) : (
        <article className="collapse-description">
          <div className="collapse">
            <p>équipements</p>
            <button onClick={() => setIsOpen(true)}>
              <img src={vectordown} alt="vectorDown" />
            </button>
          </div>
        </article>
      )}
    </div>
  );
};

export default Collapse;
