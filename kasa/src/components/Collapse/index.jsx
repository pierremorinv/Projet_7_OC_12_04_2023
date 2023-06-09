import React, { useState } from "react";
import "./style.scss";
import vectorUp from "../../assets/vectorUp.png";
import vectordown from "../../assets/vectorDown.png";

const Collapse = ({ content, title, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <article className={`collapse ${className}`}>
          <div onClick={() => setIsOpen(!isOpen)} className="collapse-top">
            <p className="collapse-title">{title}</p>
            <button className="collapse-button">
              <img
                className=" collapse-button-img"
                src={vectorUp}
                alt="vectorUp"
              />
            </button>
          </div>
          <p className="collapse-content">{content}</p>
        </article>
      ) : (
        <article className={`collapse ${className}`}>
          <div onClick={() => setIsOpen(!isOpen)} className="collapse-top">
            <p className="collapse-title">{title} </p>
            <button className="collapse-button">
              <img
                className=" collapse-button-img"
                src={vectordown}
                alt="vectorDown"
              />
            </button>
          </div>
        </article>
      )}
    </>
  );
};

export default Collapse;
