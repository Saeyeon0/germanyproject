import React, { useState } from 'react';
import './navbar.css';

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState('EN');

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <nav className="navbar">
      <div>
        <h1>Germany Project</h1>
      </div>
      <div className="navbar-links">
        <a href="#">Explore</a>
        <a href="#">Contacts</a>
        <a href="#">Login</a>
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
