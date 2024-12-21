import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import CategoriesCarousel from "./CategoriesCarousel";
import StoriesHome from "./StoriesHome";
import NotFound from "../Pages/404"; // Importa la página 404

const AppRoutes = ({ API_BASE_URL, isModalOpen, setIsModalOpen }) => (
  <Routes>
    <Route
      path="/"
      element={
        <>
          <Hero onOpenModal={() => setIsModalOpen(true)} />
          <CategoriesCarousel API_BASE_URL={API_BASE_URL} />
          <StoriesHome API_BASE_URL={API_BASE_URL} />
        </>
      }
    />
    <Route path="/stories" element={<StoriesHome API_BASE_URL={API_BASE_URL} />} />
    <Route path="/categories" element={<CategoriesCarousel API_BASE_URL={API_BASE_URL} />} />
    <Route path="*" element={<NotFound />} /> {/* Ruta para manejar páginas no encontradas */}
  </Routes>
);

export default AppRoutes;