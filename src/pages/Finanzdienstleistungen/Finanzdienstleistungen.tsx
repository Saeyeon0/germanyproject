import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Warenkreditversicherung from './Warenkreditversicherung';
import FactoringFinanzierung from './FactoringFinanzierung';
import Ecommerce from './Ecommerce';
import Inkasso from './Inkasso';
import Buergschaften from './Buergschaften';
import Vertrauensschadenversicherung from './Vertrauensschadenversicherung';
import './finanzdienstleistungen.css';

const Finanzdienstleistungen: React.FC = () => {
  return (
    <div className="finanzdienstleistungen-container">
      <h2>Finanzdienst-leistungen</h2>
      <ul>
        <li><Link to="warenkreditversicherung">a. Warenkreditversicherung</Link></li>
        <li><Link to="factoring-finanzierung">b. Factoring / Finanzierung</Link></li>
        <li><Link to="ecommerce">c. eCommerce</Link></li>
        <li><Link to="inkasso">d. Inkasso</Link></li>
        <li><Link to="buergschaften">e. Bürgschaften</Link></li>
        <li><Link to="vertrauensschadenversicherung">f. Vertrauensschadenversicherung</Link></li>
      </ul>
      <Routes>
        <Route path="warenkreditversicherung" element={<Warenkreditversicherung />} />
        <Route path="factoring-finanzierung" element={<FactoringFinanzierung />} />
        <Route path="ecommerce" element={<Ecommerce />} />
        <Route path="inkasso" element={<Inkasso />} />
        <Route path="buergschaften" element={<Buergschaften />} />
        <Route path="vertrauensschadenversicherung" element={<Vertrauensschadenversicherung />} />
      </Routes>
    </div>
  );
};

export default Finanzdienstleistungen;
