import React from 'react';
import Card from '../../components/Card/Card';
import warenkreditversicherung from "../../assets/warenkreditversicherung.webp"
import { useTranslation } from "react-i18next";

const Warenkreditversicherung: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="category">
      <Card
        image={warenkreditversicherung}
        title={t("card.1.title")}
        description={t("card.1.description")}
      />
    </div>
  );
};

export default Warenkreditversicherung;
