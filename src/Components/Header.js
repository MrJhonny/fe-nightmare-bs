import React from 'react';
import logo from '../img/logo.png'; // Ajusta la ruta según sea necesario

const Header = () => {
  return (
    <header className="sticky-top bg-dark py-2 shadow position-relative">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <img
            src={logo}
            alt="Logo"
            className="me-2"
            style={{ height: '50px' }}
          />
        </div>

        {/* Texto centrado */}
        <div className="position-absolute top-50 start-50 translate-middle">
          <span className="text-white fs-4">Tell Me Your Nightmare</span>
        </div>

        {/* Navegación */}
        {/* <nav>
          <ul className="nav">
            <li className="nav-item">
              <a href="/" className="nav-link text-white">Inicio</a>
            </li>
            <li className="nav-item">
              <a href="/categories" className="nav-link text-white">Categorías</a>
            </li>
            <li className="nav-item">
              <a href="/stories" className="nav-link text-white">Historias</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link text-white">Contacto</a>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;