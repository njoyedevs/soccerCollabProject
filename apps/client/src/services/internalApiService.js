import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_INTERNAL_API_URL,
});

export const getAllDestinations = async () => {
  const res = await http.get('/destinations');
  return res.data;
};

export const getOneDestination = async (id) => {
  const res = await http.get(`/destinations/${id}`);
  return res.data;
};

export const createProduct = async (newProduct) => {
  const res = await http.post(`/new`, newProduct);
  return res.data;
};
