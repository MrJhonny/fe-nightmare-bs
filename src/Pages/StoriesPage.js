import React, { useState, useEffect } from "react";
import "./StoriesPage.css";
import StoryCard from "../Components/StoryCard";
import Background from "../Components/Background";
import Filter from "../Components/Filter";

const StoriesPage = ({ API_BASE_URL }) => {
  const [stories, setStories] = useState([]);
  const [filteredStories, setFilteredStories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
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

        // Obtener categorías únicas
        const uniqueCategories = [
          ...new Set(sortedStories.map((story) => story.category)),
        ];

        setStories(sortedStories);
        setFilteredStories(sortedStories);
        setCategories(uniqueCategories);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching stories:", err);
        setError("Unable to load stories. Please try again later.");
        setLoading(false);
      }
    };

    fetchStories();
  }, [API_BASE_URL]);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredStories(stories);
    } else {
      const filtered = stories.filter((story) =>
        selectedCategories.includes(story.category)
      );
      setFilteredStories(filtered);
    }
  }, [selectedCategories, stories]);

  if (loading) {
    return <p className="loading-message">Loading stories...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <section className="stories-page">
      <Background />
      <div className="container py-4">
        <h1 className="text-center text-light page-title">All Stories</h1>

        {/* Filtro */}
        <Filter
          categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />

        <div className="stories-grid">
          {filteredStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesPage;