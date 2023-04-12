import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <Link to="/"> Accueil</Link>
        </li>
        <li>
          <Link to="/about"> A propros</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
