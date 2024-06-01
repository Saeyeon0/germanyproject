import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.jpg";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  const toggleLoginModal = () => {
    setLoginModalOpen(!isLoginModalOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <Link to="/" className="navbar-logo">
        <h1>
          Mario Totzek <br></br>Gruppe
        </h1>
      </Link>
      <div className="navbar-links">
        <div className="dropdown">
          <span>{t("navbar.services")}</span>
          <div className="dropdown-content">
            <Link to="/dienstleistungen/finanzdienstleistungen">
              {t("navbar.service1")}
            </Link>
            <a
              href="https://www.redpanda-properties.com/de/index_0__1_sp1_1.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("navbar.service2")}
            </a>
            <a
              href="https://www.talisman-reisen.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("navbar.service3")}
            </a>
            <Link to="/personalvermittlung">{t("navbar.service4")}</Link>
          </div>
        </div>
        <div className="dropdown">
          <span>{t("navbar.contact")}</span>
          <div className="dropdown-content">
            <Link to="/kontakt/kontaktformular">{t("navbar.contact1")}</Link>
            <Link to="/kontakt/impressum">{t("navbar.contact2")}</Link>
            <Link to="/kontakt/datenschutz">{t("navbar.contact3")}</Link>
          </div>
        </div>
        <div className="auth-buttons">
          <button className="auth-button" onClick={toggleLoginModal}>
            {t("navbar.login")}
          </button>
        </div>
        <div className="language-buttons">
          <button
            onClick={() => handleLanguageChange("en")}
            className={language === "en" ? "active" : ""}
          >
            EN
          </button>
          <button
            onClick={() => handleLanguageChange("de")}
            className={language === "de" ? "active" : ""}
          >
            DE
          </button>
        </div>
      </div>

      {isLoginModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleLoginModal}>
              &times;
            </span>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Enter your email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Enter your password" name="password" required />
              </div>
              <button type="submit" className="submit-button">
                Login
              </button>
              <button
                type="button"
                className="account"
                onClick={toggleLoginModal}
              >
                Create an account
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
