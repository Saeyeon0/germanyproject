import React from 'react';
import { Link } from 'react-router-dom';

const Kontakt: React.FC = () => {
  return (
    <div>
      <h2>Kontakt</h2>
      <ul>
        <li><Link to="/kontakt/kontaktformular">Kontaktformular</Link></li>
        <li><Link to="/kontakt/impressum">Impressum</Link></li>
        <li><Link to="/kontakt/datenschutz">Datenschutz</Link></li>
      </ul>
    </div>
  );
};

export default Kontakt;
