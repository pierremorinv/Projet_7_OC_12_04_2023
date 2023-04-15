import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="navigation">
      <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
        <li>Accueil</li>
      </NavLink>

      <NavLink
        to="/about"
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        <li>A propros</li>
      </NavLink>
    </ul>
  );
};
export default NavBar;
