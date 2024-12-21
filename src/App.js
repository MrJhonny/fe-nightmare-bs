import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
// import Categories from './Components/Categories';
import CategoriesCarousel from './Components/CategoriesCarousel';
import StoriesHome from './Components/StoriesHome';
import ModalForm from './Components/ModalForm';

function App() {
  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api/v1/';
  return (
    <div>
      <Header />
      <Hero />
      <CategoriesCarousel API_BASE_URL={API_BASE_URL} />
      <StoriesHome API_BASE_URL={API_BASE_URL} />
      <ModalForm />
   </div>
  );
}

export default App;