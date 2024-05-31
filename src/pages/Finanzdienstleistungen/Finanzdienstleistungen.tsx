import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Warenkreditversicherung from "./Warenkreditversicherung";
import FactoringFinanzierung from "./FactoringFinanzierung";
import Ecommerce from "./Ecommerce";
import Inkasso from "./Inkasso";
import Buergschaften from "./Buergschaften";
import Vertrauensschadenversicherung from "./Vertrauensschadenversicherung";
import "./finanzdienstleistungen.css";
import { useTranslation } from "react-i18next";

const Finanzdienstleistungen: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="finanzdienstleistungen-container">
      <h1>{t("services.1")}</h1>
      <ul>
        <li>
          <Link to="warenkreditversicherung">{t("services.1a")}</Link>
        </li>
        <Routes>
          <Route
            path="warenkreditversicherung"
            element={<Warenkreditversicherung />}
          />
        </Routes>
        <li>
          <Link to="factoring-finanzierung">{t("services.1b")}</Link>
        </li>
        <Routes>
          <Route
            path="factoring-finanzierung"
            element={<FactoringFinanzierung />}
          />
        </Routes>
        <li>
          <Link to="ecommerce">{t("services.1c")}</Link>
        </li>
        <Routes>
          <Route path="ecommerce" element={<Ecommerce />} />
        </Routes>
        <li>
          <Link to="inkasso">{t("services.1d")}</Link>
        </li>
        <Routes>
          <Route path="inkasso" element={<Inkasso />} />
        </Routes>
        <li>
          <Link to="buergschaften">{t("services.1e")}</Link>
        </li>
        <Routes>
          <Route path="buergschaften" element={<Buergschaften />} />
        </Routes>
        <li>
          <Link to="vertrauensschadenversicherung">{t("services.1f")}</Link>
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
