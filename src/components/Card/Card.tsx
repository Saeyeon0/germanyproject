import React from "react";
import "./Card.css";
import { useTranslation } from "react-i18next";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  const { t } = useTranslation();
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button type="submit" className="card-button">
          {t("card.button")}
        </button>
      </div>
    </div>
  );
};

export default Card;
