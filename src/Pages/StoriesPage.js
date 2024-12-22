import React, { useState, useEffect } from "react";
import "./StoriesPage.css";
import StoryCard from "../Components/StoryCard";
import Background from "../Components/Background";
import Filter from "../Components/Filter";
import StoriesExpanded from "../Components/StoriesExpanded";

const StoriesPage = ({ API_BASE_URL }) => {
  const [stories, setStories] = useState([]);
  const [filteredStories, setFilteredStories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
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

        const sortedStories = data.sort((a, b) => b.id - a.id);
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

  const handleStoryClick = (story) => {
    setSelectedStory(story);
  };

  const handleCloseExpanded = () => {
    setSelectedStory(null);
  };

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
        <Filter
          categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <div className="stories-grid">
          {filteredStories.map((story) => (
            <div key={story.id} onClick={() => handleStoryClick(story)}>
              <StoryCard story={story} />
            </div>
          ))}
        </div>
      </div>

      {/* Ventana flotante */}
      {selectedStory && (
        <StoriesExpanded story={selectedStory} onClose={handleCloseExpanded} />
      )}
    </section>
  );
};

export default StoriesPage;