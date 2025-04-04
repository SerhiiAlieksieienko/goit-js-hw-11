import axios from 'axios';

const API_KEY = '49647970-80f040e49b2c31806d94ce79c'; // Замініть на свій ключ API

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}