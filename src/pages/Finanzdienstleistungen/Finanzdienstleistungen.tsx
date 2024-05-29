import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Warenkreditversicherung from "./Warenkreditversicherung";
import FactoringFinanzierung from "./FactoringFinanzierung";
import Ecommerce from "./Ecommerce";
import Inkasso from "./Inkasso";
import Buergschaften from "./Buergschaften";
import Vertrauensschadenversicherung from "./Vertrauensschadenversicherung";
import "./finanzdienstleistungen.css";

const Finanzdienstleistungen: React.FC = () => {
  return (
    <div className="finanzdienstleistungen-container">
      <h2>Finanzdienst-leistungen</h2>
      <ul>
        <li>
          <Link to="warenkreditversicherung">a. Warenkreditversicherung</Link>
        </li>
        <Routes>
          <Route
            path="warenkreditversicherung"
            element={<Warenkreditversicherung />}
          />
        </Routes>
        <li>
          <Link to="factoring-finanzierung">b. Factoring / Finanzierung</Link>
        </li>
        <Routes>
          <Route
            path="factoring-finanzierung"
            element={<FactoringFinanzierung />}
          />
        </Routes>
        <li>
          <Link to="ecommerce">c. eCommerce</Link>
        </li>
        <Routes>
          <Route path="ecommerce" element={<Ecommerce />} />
        </Routes>
        <li>
          <Link to="inkasso">d. Inkasso</Link>
        </li>
        <Routes>
          <Route path="inkasso" element={<Inkasso />} />
        </Routes>
        <li>
          <Link to="buergschaften">e. Bürgschaften</Link>
        </li>
        <Routes>
          <Route path="buergschaften" element={<Buergschaften />} />
        </Routes>
        <li>
          <Link to="vertrauensschadenversicherung">
            f. Vertrauensschadenversicherung
          </Link>
        </li>
        <Routes>
          <Route
            path="vertrauensschadenversicherung"
            element={<Vertrauensschadenversicherung />}
          />
        </Routes>
      </ul>
    </div>
  );
};

export default Finanzdienstleistungen;
