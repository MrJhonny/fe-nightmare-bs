import React, { useState, useEffect } from "react";
import "./StoriesPage.css";
import StoryCard from "../Components/StoryCard";
import Background from "../Components/Background";

const StoriesPage = ({ API_BASE_URL }) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}notes`);
        if (!response.ok) {
          throw new Error("Failed to fetch stories");
        }
        const data = await response.json();

        // Ordenar las historias por ID en orden descendente
        const sortedStories = data.sort((a, b) => b.id - a.id);
        setStories(sortedStories);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching stories:", err);
        setError("Unable to load stories. Please try again later.");
        setLoading(false);
      }
    };

    fetchStories();
  }, [API_BASE_URL]);

  if (loading) {
    return <p className="loading-message">Loading stories...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <section className="stories-page">
      <div className="container py-4">
        <h1 className="text-center text-light page-title">All Stories</h1>
        <div className="stories-grid">
          <Background />
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesPage;