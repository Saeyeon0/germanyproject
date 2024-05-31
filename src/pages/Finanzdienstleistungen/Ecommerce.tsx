import React from 'react';
import Card from '../../components/Card/Card';
import ecommerce from "../../assets/ecommerce.webp"
import { useTranslation } from "react-i18next";

const Ecommerce: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="category">
      <Card
        image={ecommerce}
        title={t("card.3.title")}
        description={t("card.3.description")}
      />
    </div>
  );
};

export default Ecommerce;
