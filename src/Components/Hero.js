import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para manejar la navegación
import './Hero.css';
import hero1 from "../img/hero/hero1.jpg";
import hero2 from "../img/hero/hero2.jpg";
import hero3 from "../img/hero/hero3.jpg";
import hero4 from "../img/hero/hero4.jpg";
import hero5 from "../img/hero/hero5.jpg";
import hero6 from "../img/hero/hero6.jpg";
import hero7 from "../img/hero/hero7.jpg";
import hero8 from "../img/hero/hero8.jpg";

const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8];

const Hero = ({ onOpenModal }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(
    Math.floor(Math.random() * images.length) // Inicializa con un índice aleatorio
  );
  const navigate = useNavigate(); // Hook para redirigir

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(() => Math.floor(Math.random() * images.length)); // Selecciona un índice aleatorio
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleExploreClick = () => {
    navigate('/stories'); // Redirige a /stories
  };

  return (
    <section className="hero-section">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
      <div className="hero-content">
        <h1 className="hero-title">Tell Me Your</h1>
        <h1 className="hero-title">Nightmare</h1>
        <p className="hero-subtitle">See your nightmare come to life</p>
        <div className="hero-buttons">
          <button
            className="hero-btn explore-button"
            onClick={handleExploreClick} // Cambiado para redirigir a /stories
          >
            Explore Categories And Stories
          </button>
          <button
            className="hero-btn submit-button"
            onClick={onOpenModal} // Abre el modal
          >
            Submit Your Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;