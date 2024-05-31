import React from 'react';
import "./footer.css";
import logo from "../../assets/logo.jpg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="logo1" />
      <h1 className="footer-logo">Mario Totzek <br></br>Gruppe</h1>
      <p className="footer-year">© 2024</p>
    </footer>
  );
};

export default Footer;