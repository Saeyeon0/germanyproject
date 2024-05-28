import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState('EN');

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <h1>Germany Project</h1>
      </Link>
      <div className="navbar-links">
        <div className="language-buttons">
          <button
            onClick={() => handleLanguageChange('EN')}
            className={language === 'EN' ? 'active' : ''}
          >
            EN
          </button>
          <button
            onClick={() => handleLanguageChange('DE')}
            className={language === 'DE' ? 'active' : ''}
          >
            DE
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
