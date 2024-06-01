import React, { useState } from 'react';
import './personalvermittlung.css';
import backgroundImage from '../../assets/background.webp';
import { useTranslation } from "react-i18next";

const Personalvermittlung: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [cv, setCv] = useState<File | null>(null);
  const { t } = useTranslation();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('position', position);
    if (cv) {
      formData.append('cv', cv);
    }

    try {
      const response = await fetch('http://localhost:5000/api/apply', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      alert('Application submitted successfully!');
      // Reset form
      setName('');
      setEmail('');
      setPosition('');
      setCv(null);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again later.');
    }
  };

  return (
    <div className="personalvermittlung-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>{t("recruitment.title")}</h1>
      <form className="application-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">{t("recruitment.name")}</label>
          <input
            type="text"
            id="name"
            placeholder={t("recruitment.name_ph")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">{t("recruitment.email")}</label>
          <input
            type="email"
            id="email"
            placeholder={t("recruitment.email_ph")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="position">{t("recruitment.position")}</label>
          <input
            type="text"
            id="position"
            placeholder={t("recruitment.position_ph")}
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cv">{t("recruitment.cv")}</label>
          <input
            type="file"
            id="cv"
            onChange={(e) => setCv(e.target.files?.[0] || null)}
            required
          />
        </div>
        <button type="submit">{t("recruitment.submit")}</button>
      </form>
    </div>
  );
};

export default Personalvermittlung;
