import React from 'react';
import Card from '../../components/Card/Card';
import guarantees from "../../assets/guarantees.webp"
import { useTranslation } from "react-i18next";

const Buergschaften: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="category">
      <Card
        image={guarantees}
        title={t("card.5.title")}
        description={t("card.5.description")}
      />
    </div>
  );
};

export default Buergschaften;
