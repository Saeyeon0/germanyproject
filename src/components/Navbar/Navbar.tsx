import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.jpg";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegistration, setIsRegistration] = useState(false); // State to manage form toggle
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  const toggleLoginModal = () => {
    setLoginModalOpen(!isLoginModalOpen);
    setIsRegistration(false); // Reset to login form when modal is closed
  };

  const toggleForm = () => {
    setIsRegistration(!isRegistration);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegistration && password !== confirmPassword) {
      alert(t("navbar.password_mismatch"));
      return;
    }
    // Handle form submission logic
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
            <h2>{isRegistration ? t("navbar.registration") : t("navbar.login")}</h2>
            <form onSubmit={handleSubmit}>
              {!isRegistration ? (
                <>
                  <div className="form-group">
                    <label htmlFor="email">{t("navbar.email")}</label>
                    <input
                      type="email"
                      id="email"
                      placeholder={t("navbar.email_ph")}
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">{t("navbar.password")}</label>
                    <input
                      type="password"
                      id="password"
                      placeholder={t("navbar.password_ph")}
                      name="password"
                      required
                    />
                  </div>
                  <button type="submit" className="submit-button">
                    {t("navbar.login_btn")}
                  </button>
                  <button
                    type="button"
                    className="toggle-button"
                    onClick={toggleForm}
                  >
                    {t("navbar.create")}
                  </button>
                </>
              ) : (
                <>
                  <div className="form-group">
                    <label htmlFor="name">{t("navbar.name")}</label>
                    <input
                      type="text"
                      id="name"
                      placeholder={t("navbar.name_ph")}
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">{t("navbar.email")}</label>
                    <input
                      type="email"
                      id="email"
                      placeholder={t("navbar.email_ph")}
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">{t("navbar.password")}</label>
                    <input
                      type="password"
                      id="password"
                      placeholder={t("navbar.password_ph")}
                      name="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">{t("navbar.confirm_password")}</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      placeholder={t("navbar.confirm_password_ph")}
                      name="confirmPassword"
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="submit-button">
                    {t("navbar.create")}
                  </button>
                  <button
                    type="button"
                    className="toggle-button"
                    onClick={toggleForm}
                  >
                    {t("navbar.login")}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
