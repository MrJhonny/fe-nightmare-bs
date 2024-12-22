import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Para redirección
import './404.css'; // Archivo CSS para los estilos específicos

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Deshabilitar scroll del body al montar este componente
    document.body.style.overflow = "hidden";

    // Restaurar el scroll del body al desmontar este componente
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="not-found-container">
      <video
        className="video-background"
        autoPlay
        loop
        muted
      >
        <source src="https://s3.us-east-1.amazonaws.com/tellmeyournightmare.com/media/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="not-found-content text-center">
        <h1 className="display-1 fw-bold text-light text-shadow">404</h1>
        <p className="lead text-light text-shadow">The page you are looking for does not exist.</p>
        <button
          className="btn btn-danger btn-lg mt-3 shadow"
          onClick={() => navigate('/')} // Redirige al inicio
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;