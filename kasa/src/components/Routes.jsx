import React from "react";
import { Routes as RoutesRouter, Route } from "react-router-dom";
import Home from "../pages/Home";
import FicheLogement from "../pages/FicheLogement";
import About from "../pages/About";
import Error from "../pages/Error";

//todo: modif description path

const Routes = () => {
  return (
    <RoutesRouter>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/fiche-logement/:id" element={<FicheLogement />} />
      <Route path="*" element={<Error />} />
    </RoutesRouter>
  );
};

export default Routes;
