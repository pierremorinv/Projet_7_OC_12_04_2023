import React from "react";
import "./style.scss";
import NavBar from "../NavBar";
import headerLogo from "../../assets/headerLogo.svg";

const Header = () => {
  return (
    <header>
      <img
        className="header-logo"
        src={headerLogo}
        alt="locations d'appartements"
      />
      <NavBar />
    </header>
  );
};

export default Header;
