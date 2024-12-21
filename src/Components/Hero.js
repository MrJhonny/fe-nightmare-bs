import React, { useState, useEffect } from 'react';
import './Hero.css'; // Archivo CSS para personalizaciones
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToCategories = () => {
    const categoriesSection = document.getElementById('categories-section');
    if (categoriesSection) {
      const offset = -20; // Ajuste en píxeles (scroll 20px menos)
      const elementPosition = categoriesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  return (
    <section
      className="hero-section d-flex align-items-center justify-content-center text-white text-center"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div className="container">
        <h1 className="display-1 fw-bold">Tell Me Your</h1>
        <h1 className="display-1 fw-bold">Nightmare</h1>
        <p className="lead">See your nightmare come to life</p>
        <div className="d-flex flex-column flex-md-row gap-3 mt-4 justify-content-center">
          <button
            className="btn btn-primary btn-lg"
            onClick={handleScrollToCategories}
          >
            Explore Categories And Stories
          </button>
          <button
            className="btn btn-secondary btn-lg"
            onClick={onOpenModal}
          >
            Submit Your Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;