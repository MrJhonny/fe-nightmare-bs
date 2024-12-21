import React from "react";
import "./FloatingButton.css";

const FloatingButton = ({ onClick }) => {
  return (
    <button className="btn-float" onClick={onClick}>
      +
    </button>
  );
};

export default FloatingButton;