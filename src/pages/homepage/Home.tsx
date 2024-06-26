import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { useTranslation } from "react-i18next";
import liquima from "../../assets/liquima.webp";
import reisen from "../../assets/reisen.webp";
import redpanda from "../../assets/redpanda.webp";
import recruitment from "../../assets/recruitment.webp";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <header className="home-header">
        <div>
          <h2 className="homeTitle">{t("home.title")}</h2>
          <ul>
            <li>
              <button
                className="link-button"
                style={{ backgroundImage: `url(${liquima})` }}
              >
                <a
                  href="https://www.liquima.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{t("home.category1")}</span>
                  <h5>(Liquima)</h5>
                </a>
              </button>
            </li>
            <li>
              <button
                className="link-button"
                style={{ backgroundImage: `url(${reisen})` }}
              >
                <a
                  href="https://www.talisman-reisen.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{t("home.category2")}</span>
                  <h5>(Talisman Reisen GmbH & Co. KG)</h5>
                </a>
              </button>
            </li>
            <li>
              <button
                className="link-button"
                style={{ backgroundImage: `url(${redpanda})` }}
              >
                <a
                  href="https://www.redpanda-properties.com/de/index_0__1_sp1_1.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{t("home.category3")}</span>
                  <h5>(Red Panda Properties)</h5>
                </a>
              </button>
            </li>
            <li>
              <button
                className="link-button"
                style={{ backgroundImage: `url(${recruitment})` }}
              >
                <Link to="/personalvermittlung">
                  <span>{t("home.category4")}</span>
                  <h5>(Job & Personal)</h5>
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Home;
