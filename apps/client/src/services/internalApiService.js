import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_INTERNAL_API_URL,
});

export const createUser = (newUser) => {
  return http
    .post(`/new`, newUser)
    .then((res) => res.data)
    .catch((err) => {
      if (err.response && err.response.status === 409) {
        return { error: err.response.data.message };
      } else {
        return { error: 'An unknown error occurred' };
      }
    });
};
