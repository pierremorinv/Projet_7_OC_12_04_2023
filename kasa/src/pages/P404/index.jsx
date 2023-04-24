import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const P404 = () => {
  return (
    <div className="error-body">
      <div className="error-body-message">
        <h1>404</h1>
        <p>Oups! la page que vous demandez n'existe pas.</p>
      </div>
      <p className="redirection">
        <Link to="/">Retourner sur la page d'acceuil </Link>
      </p>
    </div>
  );
};

export default P404;
