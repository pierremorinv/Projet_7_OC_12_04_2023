import React from "react";
import "./style.scss";
import BarNav from "../barNav";
import headerLogo from "../../assets/headerLogo.svg";

const Header = () => {
  return (
    <header>
      <img src={headerLogo} alt="locations d'appartements" />
      <BarNav />
    </header>
  );
};

export default Header;
