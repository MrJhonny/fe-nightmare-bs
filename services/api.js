import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL; // Lee la URL del backend desde .env

// Crear un servicio para obtener las notas
export const getNotes = async () => {
  try {
    const response = await axios.get(`${API_URL}/notes`);
    return response.data;
  } catch (error) {
    console.error("Error fetching notes", error);
    throw error;
  }
};