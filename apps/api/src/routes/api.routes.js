import ApiController from '../controllers/api.controller.js';

export const apiRoutes = (app) => {
  console.log('Test Back End');
  app.get('/api/keys', ApiController.getKeys); // Make sure this line matches the HTTP method and URL path used in internalAPI.js
};
