import ProductController from '../controllers/product.controller.js';

export const productRoutes = (app) => {
  // app.get('/api', ProductController.index);
  // app.get('/api/products', ProductController.getAllProducts);
  // app.get('/api/product/:id', ProductController.getProduct);
  // app.put('/api/product/:id', ProductController.updateProduct);
  // app.post('/api/new/product', ProductController.createProduct);
  // app.delete('/api/product/:id', ProductController.deleteProduct);
  app.get('/api', ProductController.getAllProducts); // Read
  app.get('/api/:id', ProductController.getProduct); // Show 1
  app.put('/api/edit/:id', ProductController.updateProduct); // Update
  app.post('/api/new/', ProductController.createProduct); // Create
  app.delete('/api/delete/:id', ProductController.deleteProduct); // Delete
};
