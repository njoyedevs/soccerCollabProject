import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_INTERNAL_API_URL,
});

// export const getAllDestinations = async () => {
//   const res = await http.get('/destinations');
//   return res.data;
// };

// export const getOneDestination = async (id) => {
//   const res = await http.get(`/destinations/${id}`);
//   return res.data;
// };

// export const createProduct = (newProduct) => {
//   return http
//     .post(`/new`, newProduct)
//     .then((res) => {
//       return res.data;
//     })
//     .catch((error) => {
//       console.error('Error creating product:', error);
//       throw error;
//     });
// };

export const createProduct = (newProduct) => {
  return http
    .post(`/new`, newProduct)
    .then((res) => res.data)
    .catch((err) => {
      if (err.response && err.response.status === 409) {
        return { error: err.response.data.message };
      } else {
        return { error: 'An unknown error occurred' };
      }
    });
};
