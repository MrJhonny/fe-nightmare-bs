import React, { useState, useEffect } from 'react';
import './StoriesHome.css';

const StoriesHome = ({ API_BASE_URL }) => {
  const [stories, setStories] = useState([]);
  const [apiError, setApiError] = useState(null);

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
        console.error('Error fetching stories:', error);
        setApiError('Failed to fetch stories. Please try again later.');
      }
    };

    fetchStories();
  }, [API_BASE_URL]);

  if (apiError) {
    return <p className="error-message">{apiError}</p>;
  }

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <section className="stories-section py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4">Stories</h2>
        <div className="stories-grid">
          {stories.map((story) => (
            <div key={story.id} className="story-card">
              <h3>{story.title}</h3>

              <p>
                <strong>Category:</strong> {story.category}
              </p>
              <p>
                <strong>Recurrence:</strong> {story.recurrencia}
              </p>
              <p>
                <strong>Description:</strong> {truncateText(story.value, 60)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesHome;