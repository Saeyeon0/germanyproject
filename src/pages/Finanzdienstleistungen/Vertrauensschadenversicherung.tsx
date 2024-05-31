import React from 'react';
import Card from '../../components/Card/Card';
import fidelity from "../../assets/fidelity.webp"
import { useTranslation } from "react-i18next";

const Vertrauensschadenversicherung: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="category">
      <Card
        image={fidelity}
        title={t("card.6.title")}
        description={t("card.6.description")}
      />
    </div>
  );
};

export default Vertrauensschadenversicherung;
