import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="home-header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <nav className="home-nav">
          <Link to="/mario-totzek-gruppe">Mario Totzek Gruppe</Link>
          <div className="dropdown">
            <span>Dienstleistungen</span>
            <div className="dropdown-content">
              <Link to="/dienstleistungen/finanzdienstleistungen">Finanzdienst-leistungen</Link>
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
        </nav>
      </header>
    </div>
  );
};

export default Home;