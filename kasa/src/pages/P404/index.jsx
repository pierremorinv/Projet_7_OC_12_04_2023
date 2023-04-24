import React from "react";
import "./style.scss";

const P404 = () => {
  return (
    <div className="error-body">
      {" "}
      <div>
        {" "}
        <h1>404</h1>
        <p>Oups! la page que vous demandez n'existe pas.</p>
      </div>
      <p className="redirection">
        {" "}
        <a href="/">Retourner sur la page d'acceuil</a>{" "}
      </p>
    </div>
  );
};

export default P404;
