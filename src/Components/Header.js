import React from 'react';
import './Header.css';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom'; // Importar Link de react-router-dom

const Header = () => {
  return (
    <header className="sticky-top bg-black py-3 shadow-lg">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <div className="d-flex align-items-center">
          <Link to="/"> {/* Usar Link para redirigir al inicio */}
            <img
              src={logo}
              alt="Logo"
              className="me-2"
              style={{ height: '50px', filter: 'brightness(0.8)', cursor: 'pointer' }}
            />
          </Link>
        </div>

        {/* Texto centrado */}
        <div className="position-absolute top-50 start-50 translate-middle">
          <span className="text-white fs-4 fw-bold" style={{ textShadow: '0 0 10px crimson, 0 0 5px darkred' }}>
            Tell Me Your Nightmare
          </span>
        </div>

        {/* Espacio vacío para balancear diseño */}
        <div style={{ width: '50px' }}></div>

        {/* Navegación */}
        <nav className="d-none d-md-block">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">Home</Link>
            </li>
            <li className="nav-item">
              {/* <Link to="/categories" className="nav-link text-white">Categorías</Link> */}
            </li>
            <li className="nav-item">
              <Link to="/stories" className="nav-link text-white">Stories</Link>
            </li>
            <li className="nav-item">
              {/* <Link to="/contact" className="nav-link text-white">Contacto</Link> */}
            </li>
          </ul>
        </nav>

        {/* Menú desplegable para pantallas pequeñas */}
        <div className="dropdown d-md-none">
          <button
            className="btn btn-dark dropdown-toggle text-white"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            
          </button>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton">
            <li>
              <Link className="dropdown-item" to="/">Home</Link>
            </li>
            <li>
              {/* <Link className="dropdown-item" to="/categories">Categorías</Link> */}
            </li>
            <li>
              <Link className="dropdown-item" to="/stories">Stories</Link>
            </li>
            <li>
              {/* <Link className="dropdown-item" to="/contact">Contacto</Link> */}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;