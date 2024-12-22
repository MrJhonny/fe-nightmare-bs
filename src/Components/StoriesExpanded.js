import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StoriesExpanded.css";

const StoriesExpanded = ({ story, onClose }) => {
  // Deshabilitar el scroll del fondo al abrir el modal
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Evita el scroll en el fondo
    return () => {
      document.body.style.overflow = "auto"; // Restaura el scroll al cerrar
    };
  }, []);

  // Manejar el cierre al hacer clic fuera del contenedor del modal
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("stories-expanded-overlay")) {
      onClose();
    }
  };

  if (!story) return null;

  return (
    <div
      className="stories-expanded-overlay d-flex align-items-center justify-content-center"
      onClick={handleOverlayClick}
    >
      <div className="stories-expanded-container bg-dark text-light rounded shadow-lg p-4 position-relative">
        <button
          type="button"
          className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
          onClick={onClose}
          aria-label="Close"
        ></button>
        <h1 className="story-title text-center text-crimson">{story.title}</h1>
        <p className="story-recurrence mt-4">
          <strong>Author:</strong> {story.name}
        </p>
        <p className="story-recurrence">
          <strong>Recurrence:</strong> {story.recurrencia}
        </p>
        <p className="story-category">
          <strong>Category:</strong> {story.category}
        </p>
        <div className="story-description mt-3">
          <strong>Details:</strong> {story.value}
        </div>
        <div className="story-id mt-3">
          <strong>ID:</strong> {story.id}
        </div>
      </div>
    </div>
  );
};

export default StoriesExpanded;