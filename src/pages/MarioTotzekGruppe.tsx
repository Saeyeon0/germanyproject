// src/pages/MarioTotzekGruppe.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const MarioTotzekGruppe: React.FC = () => {
  return (
    <div>
      <h2>Mario Totzek Gruppe</h2>
      <ul>
        <li><a href="https://www.liquima.de" target="_blank" rel="noopener noreferrer">Warenkreditversicherung, Factoring, Leasing (Liquima)</a></li>
        <li><a href="https://www.talisman-reisen.de/" target="_blank" rel="noopener noreferrer">Touristik (Talisman Reisen GmbH & Co. KG)</a></li>
        <li><a href="https://www.redpanda-properties.com/de/index_0__1_sp1_1.htm" target="_blank" rel="noopener noreferrer">Immobilien (Red Panda Properties)</a></li>
        <li><a href="https://job-und-personal.de/" target="_blank" rel="noopener noreferrer">Personalvermittlung (Job & Personal)</a></li>
      </ul>
    </div>
  );
};

export default MarioTotzekGruppe;
