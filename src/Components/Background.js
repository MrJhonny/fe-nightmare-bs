import React, { useState, useEffect } from 'react';
import './Background.css';
import hero1 from "../img/hero/hero1.jpg";
import hero2 from "../img/hero/hero2.jpg";
import hero3 from "../img/hero/hero3.jpg";
import hero4 from "../img/hero/hero4.jpg";
import hero5 from "../img/hero/hero5.jpg";
import hero6 from "../img/hero/hero6.jpg";
import hero7 from "../img/hero/hero7.jpg";
import hero8 from "../img/hero/hero8.jpg";

const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8];

const Background = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Cambia la imagen cada 5 segundos
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        transition: "background-image 1s ease-in-out", // Transición suave entre imágenes
      }}
    ></div>
  );
};

export default Background;