import React from 'react';
import { useNavigate } from 'react-router-dom'; // Para redirección
import Header from '../Components/Header';
import './404.css'; 
const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <Header />
      <video
        autoPlay
        loop
        muted
        style={styles.videoBackground}
      >
        <source src="/media/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={styles.content}>
        <h1 style={styles.title}>404</h1>
        <p style={styles.message}>The page you are looking for does not exist.</p>
        <button
          style={styles.button}
          onClick={() => navigate('/')} // Redirige al inicio
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    color: '#fff',
    textAlign: 'center',
  },
  videoBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  title: {
    fontSize: '8rem',
    margin: '0',
    fontWeight: 'bold',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)', // Sombra en el texto
  },
  message: {
    fontSize: '1.5rem',
    marginTop: '1rem',
    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1.2rem',
    color: '#fff',
    backgroundColor: 'crimson',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: 'darkred',
  },
};

export default NotFoundPage;