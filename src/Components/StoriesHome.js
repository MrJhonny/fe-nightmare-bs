import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Para la navegación
import "./StoriesHome.css";

const StoriesHome = ({ API_BASE_URL }) => {
  const [stories, setStories] = useState([]);
  const [apiError, setApiError] = useState(null);
  const navigate = useNavigate(); // Hook para redirección

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}notes`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStories(data);
      } catch (error) {
        console.error("Error fetching stories:", error);
        setApiError("Failed to fetch stories. Please try again later.");
      }
    };

    fetchStories();
  }, [API_BASE_URL]);

  const truncateText = (text = "", maxLength = 60) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const getVisibleStories = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      // Mostrar 4 historias en móvil
      return stories.slice(0, 4);
    }

    // Mostrar 18 historias en pantallas grandes
    return stories.slice(0, 18);
  };

  const renderStories = () => {
    const visibleStories = getVisibleStories();
    const isMobile = window.innerWidth <= 768;

    return visibleStories.map((story, index) => (
      <div
        key={story.id || index}
        className={`story-card ${
          (isMobile && index >= 2) || (!isMobile && index >= 12)
            ? "blurred-story"
            : ""
        }`}
      >
        <h3>{truncateText(story.title, 30)}</h3>
        <p>
          <strong>Category:</strong> {story.category || "Unknown"}
        </p>
        <p>
          <strong>Recurrence:</strong> {story.recurrencia || "Unknown"}
        </p>
        <p>
          <strong>Description:</strong> {truncateText(story.value, 60)}
        </p>
      </div>
    ));
  };

  return (
    <section className="stories-section py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4">Stories</h2>
        {apiError ? (
          <p className="error-message text-center">{apiError}</p>
        ) : (
          <div className="stories-grid">
            {renderStories()}
            {/* Botón para "View More" */}
            <div className="view-more-container">
              <button
                className="view-more-button"
                onClick={() => navigate("/stories")}
              >
                View More
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StoriesHome;