import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App'; // Ajusta la ruta según tu estructura
// import StoriesPage from '../Pages/StoriesPage'; // Nueva página
import Terms from '../Pages/Terms'; // Nueva página
import NotFound from '../Pages/404'; // Página 404

const AppRoutes = ({ stories, apiError }) => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/terms" element={<Terms />} /> */}
      <Route path="/stories" element={<StoriesPage stories={stories} apiError={apiError} />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;