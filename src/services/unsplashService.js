import axios from 'axios';

const API_URL = `${process.env.REACT_APP_BASE_URL}/photos`;
const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const fetchPhotos = async (page = 1, perPage = 15) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
      params: { page, per_page: perPage },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('No more photos found. Please try again later.');
    }
    throw new Error(error.message || 'Failed to fetch photos.');
  }
};