import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Kontakt from "./pages/Kontakt";
import Finanzdienstleistungen from "./pages/Finanzdienstleistungen/Finanzdienstleistungen";
import Immobilien from "./pages/Immobilien";
import Reisen from "./pages/Reisen";
import Personal from "./pages/Personal";
import {
  Kontaktformular,
  Impressum,
  Datenschutz,
} from "./pages/KontaktCategories";
import Personalvermittlung from './pages/Personalvermittlung';
import Navbar from "./components//Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <main style={{ padding: "1rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dienstleistungen/finanzdienstleistungen/*"
              element={<Finanzdienstleistungen />}
            />
            <Route
              path="/dienstleistungen/immobilien"
              element={<Immobilien />}
            />
            <Route path="/dienstleistungen/reisen" element={<Reisen />} />
            <Route path="/dienstleistungen/personal" element={<Personal />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route
              path="/kontakt/kontaktformular"
              element={<Kontaktformular />}
            />
            <Route path="/kontakt/impressum" element={<Impressum />} />
            <Route path="/kontakt/datenschutz" element={<Datenschutz />} />
            <Route
              path="/personalvermittlung/*"
              element={<Personalvermittlung />}
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
