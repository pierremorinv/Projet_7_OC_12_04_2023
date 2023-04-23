import React from "react";
import footerLogo from "../../assets/footerLogo.svg";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        className="footer-logo"
        src={footerLogo}
        alt="Kasa locations d'appartements"
      />
      <p className="footer-title">© 2020 Kasa. All rights reserved </p>
    </footer>
  );
};

export default Footer;
