import React from "react";
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="home-header">
        <div>
          <h2 className="homeTitle">Mario Totzek Gruppe</h2>
          <ul>
            <li>
              <button className="link-button">
                <a
                  href="https://www.liquima.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Warenkreditversicherung, Factoring, Leasing</span>
                  <h5>(Liquima)</h5>
                </a>
              </button>
            </li>
            <li>
              <button className="link-button">
                <a
                  href="https://www.talisman-reisen.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Touristik</span>
                  <h5>(Talisman Reisen GmbH & Co. KG)</h5>
                </a>
              </button>
            </li>
            <li>
              <button className="link-button">
                <a
                  href="https://www.redpanda-properties.com/de/index_0__1_sp1_1.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Immobilien</span>
                  <h5>(Red Panda Properties)</h5>
                </a>
              </button>
            </li>
            <li>
              <button className="link-button">
                <a
                  href="https://job-und-personal.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Personalvermittlung</span>
                  <h5>(Job & Personal)</h5>
                </a>
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Home;
