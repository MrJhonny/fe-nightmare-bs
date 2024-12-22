import React from "react";
import categoriesImages from "../img/categories/categories";
import "./Filter.css";

const Filter = ({ categories = [], selectedCategories = [], setSelectedCategories }) => {
  const handleCategoryChange = (category, event) => {
    event.stopPropagation(); // Previene que el menú se cierre
    if (!category) return; // Previene errores en caso de categorías inválidas

    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-dark dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter by Categories
      </button>
      <div
        className="dropdown-menu dropdown-menu-dark p-2"
        aria-labelledby="dropdownMenuButton"
      >
        <div className="filter-container">
          {categories.length > 0 ? (
            categories.map((category, index) => {
              // Asegurar que las claves coincidan correctamente con categoriesImages
              const categoryKey = category.toLowerCase().replace(/\s+/g, "_").trim();
              const image = categoriesImages[categoryKey] || "/path/to/default_image.png";

              return (
                <div
                  key={`${category}-${index}`} // Clave única para prevenir conflictos
                  className={`filter-option ${
                    selectedCategories.includes(category) ? "selected" : ""
                  }`}
                  onClick={(event) => handleCategoryChange(category, event)}
                >
                  {image && (
                    <img src={image} alt={category} className="filter-image" />
                  )}
                  <span className="filter-label">{category}</span>
                </div>
              );
            })
          ) : (
            <p className="text-muted text-center">No categories available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;