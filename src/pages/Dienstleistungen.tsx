import React from 'react';
import { Link } from 'react-router-dom';

const Dienstleistungen: React.FC = () => {
  return (
    <div>
      <h2>Dienstleistungen</h2>
      <ul>
        <li><Link to="/dienstleistungen/finanzdienstleistungen">Finanzdienst-leistungen</Link></li>
        <li><Link to="/dienstleistungen/immobilien">Immobilien</Link></li>
        <li><Link to="/dienstleistungen/reisen">Reisen</Link></li>
        <li><Link to="/dienstleistungen/personal">Personal</Link></li>
      </ul>
    </div>
  );
};

export default Dienstleistungen;
