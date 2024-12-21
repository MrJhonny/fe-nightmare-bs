import React, { useState, useEffect } from "react";
import "./Categories.css";
import categoriesImages from "../img/categories/categories";

const CategoriesCarousel = ({ API_BASE_URL }) => {
  const [categories, setCategories] = useState([]);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}categories`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const fetchedCategories = data.categories.map((name, index) => {
          const formattedName = name.toLowerCase().replace(/ /g, "_").trim();
          const image = categoriesImages[formattedName] || "/path/to/default_image.png";

          return {
            id: index + 1,
            name,
            image,
          };
        });

        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setApiError("Failed to fetch categories. Please try again later.");
      }
    };

    fetchCategories();
  }, [API_BASE_URL]);

  if (apiError) {
    return <p className="text-danger text-center">{apiError}</p>;
  }

  // Agrupar categorías para el carousel
  const groupedCategories = [];
  for (let i = 0; i < categories.length; i += 5) {
    groupedCategories.push(categories.slice(i, i + 5));
  }

  return (
    <section id="categories-section" className="categories-carousel py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4">Categories</h2>
        <div
          id="categoriesCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner">
            {groupedCategories.map((group, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="d-flex justify-content-center">
                  {group.map((category) => (
                    <div key={category.id} className="category-card">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="img-fluid"
                      />
                      <h3 className="text-white mt-2">{category.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#categoriesCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#categoriesCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesCarousel;