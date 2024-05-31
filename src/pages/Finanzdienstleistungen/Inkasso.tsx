import React from 'react';
import Card from '../../components/Card/Card';
import debt from "../../assets/debt.webp"
import { useTranslation } from "react-i18next";

const Inkasso: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="category">
      <Card
        image={debt}
        title={t("card.4.title")}
        description={t("card.4.description")}
      />
    </div>
  );
};

export default Inkasso;
