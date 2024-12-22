import React, { useState, useEffect } from 'react';
import './Categories.css'; // Archivo CSS para estilos personalizados
import categoriesImages from '../img/categories/categories'; // Asegúrate de tener un mapeo de imágenes

const Categories = ({ API_BASE_URL }) => {
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

        // Mapear categorías desde la API y asociarlas con imágenes
        const fetchedCategories = data.categories.map((name, index) => {
          const formattedName = name.toLowerCase().replace(/ /g, '_').trim();
          const image = categoriesImages[formattedName] || '/path/to/default_image.png';

          return {
            id: index + 1,
            name,
            image,
          };
        });

        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setApiError('Failed to fetch categories. Please try again later.');
      }
    };

    fetchCategories();
  }, [API_BASE_URL]);

  if (apiError) {
    return <p className="text-danger text-center">{apiError}</p>;
  }

  return (
    <section className="categories py-5">
      <div className="container">
        <h2 className="text-center text-white mb-4">Categories</h2>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <img
                src={category.image}
                alt={category.name}
                className="img-fluid rounded mb-3"
              />
              <h3 className="text-white">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;