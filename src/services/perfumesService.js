import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000'; // Asegúrate que coincida con tu backend

export const getPerfumes = async (category, isNew) => {
  try {
    let url = `${API_URL}/perfumes`;

    // Si tu backend acepta filtros por query string:
    const params = {};
    if (category) params.category = category;
    if (isNew) params.isNew = isNew;

    const response = await axios.get(url, { params });
    console.log("RESPONSE API: ",response.data)
    return response.data;
  } catch (error) {
    console.error('Error al obtener los perfumes:', error);
    return [];
  }
};

export const getPerfumeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/perfumes/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener el perfume con ID ${id}:`, error);
    return null;
  }
};
