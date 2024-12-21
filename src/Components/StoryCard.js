import React from "react";
import "./StoryCard.css";

const StoryCard = ({ story }) => {
  return (
    <div className="story-card">
      <h3>{story.title}</h3>
      <p>
        <strong>Category:</strong> {story.category}
      </p>
      <p>
        <strong>Recurrence:</strong> {story.recurrencia}
      </p>
      <p>
        <strong>Description:</strong> {story.value.slice(0, 100)}...
      </p>
    </div>
  );
};

export default StoryCard;