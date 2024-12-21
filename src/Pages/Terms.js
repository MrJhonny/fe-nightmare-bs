import React from 'react';
// import Header from '../Components/Header'; // Ruta correcta del Header
import Hero from '../Components/Hero'; // Reutilizamos el Hero
import './Terms.css'; // Archivo CSS para los estilos específicos

const TermsPage = () => {
  return (
    <div className="terms-page">
      <Hero />
      <div className="pdf-container">
        <iframe
          src="/Terms_and_Conditions_of_Use.pdf" // Ruta correcta del PDF
          title="Terms and Conditions"
          className="pdf-iframe"
        />
      </div>
    </div>
  );
};

export default TermsPage;