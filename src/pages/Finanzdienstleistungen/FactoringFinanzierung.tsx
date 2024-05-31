import React from 'react';
import Card from '../../components/Card/Card';
import factoring from "../../assets/factoring.webp"
import { useTranslation } from "react-i18next";

const FactoringFinanzierung: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="category">
      <Card
        image={factoring}
        title={t("card.2.title")}
        description={t("card.2.description")}
      />
    </div>
  );
};

export default FactoringFinanzierung;
