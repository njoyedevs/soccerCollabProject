import UserController from '../controllers/user.controller.js';

export const userRoutes = (app) => {
  app.get('/api', UserController.getAllUsers); // Read
  app.get('/api/:id', UserController.getUser); // Show 1
  app.put('/api/edit/:id', UserController.updateUser); // Update
  app.post('/api/new/', UserController.createUser); // Create
  app.delete('/api/delete/:id', UserController.deleteUser); // Delete
};
