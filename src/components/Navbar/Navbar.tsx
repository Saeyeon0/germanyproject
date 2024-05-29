import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState("EN");

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <nav className="navbar">
      <img src="/logo.png" alt="Logo" className="logo" />
      <Link to="/" className="navbar-logo">
        <h1>Mario Totzek Gruppe</h1>
      </Link>
      <div className="navbar-links">
        <div className="dropdown">
          <span>Dienstleistungen</span>
          <div className="dropdown-content">
            <Link to="/dienstleistungen/finanzdienstleistungen">Finanzdienstleistungen</Link>
            <Link to="/dienstleistungen/immobilien">Immobilien</Link>
            <Link to="/dienstleistungen/reisen">Reisen</Link>
            <Link to="/dienstleistungen/personal">Personal</Link>
          </div>
        </div>
        <div className="dropdown">
          <span>Kontakt</span>
          <div className="dropdown-content">
            <Link to="/kontakt/kontaktformular">Kontaktformular</Link>
            <Link to="/kontakt/impressum">Impressum</Link>
            <Link to="/kontakt/datenschutz">Datenschutz</Link>
          </div>
        </div>
        <div className="language-buttons">
          <button
            onClick={() => handleLanguageChange("EN")}
            className={language === "EN" ? "active" : ""}
          >
            EN
          </button>
          <button
            onClick={() => handleLanguageChange("DE")}
            className={language === "DE" ? "active" : ""}
          >
            DE
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
