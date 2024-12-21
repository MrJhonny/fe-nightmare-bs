import React from 'react';
import './Header.css';
import logo from '../img/logo.png';

const Header = () => {
  return (
    <header className="sticky-top bg-dark py-2 shadow">
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
          <span className="text-white fs-4 fw-bold">Tell Me Your Nightmare</span>
        </div>

        {/* Navegación */}
        {/* <nav className="d-none d-md-block">
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

        {/* Menú desplegable para pantallas pequeñas */}
        {/* <div className="dropdown d-md-none">
          <button
            className="btn btn-dark dropdown-toggle text-white"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Menú
          </button>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item" href="/">Inicio</a>
            </li>
            <li>
              <a className="dropdown-item" href="/categories">Categorías</a>
            </li>
            <li>
              <a className="dropdown-item" href="/stories">Historias</a>
            </li>
            <li>
              <a className="dropdown-item" href="/contact">Contacto</a>
            </li>
          </ul>
        </div> */}
      </div>
    </header>
  );
};

export default Header;