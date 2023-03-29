import Product from '../models/product.model.js';

const index = (request, response) => {
  Product.find()
    .then((allProducts) => {
      response.json({ Person: allProducts });
    })
    .catch((err) => {
      response.status(400).json({ ...err, message: err.message });
    });
};

// const createProduct = (request, response, next) => {
//   Product.create(request.body)
//     .then((product) => response.json(product))
//     .catch((err) => {
//       // response.status(400).json({...err, message: err.message })}
//       next(err);
//     });
// };

const createProduct = (request, response, next) => {
  Product.create(request.body)
    .then((product) => {
      response.json(product);
    })
    .catch((err) => {
      if (err.name === 'MongoServerError' && err.code === 11000) {
        // Duplicate email error
        response.status(409).json({ message: 'Email already exists' });
      } else {
        // Other errors
        next(err);
      }
    });
};

// Need to test
const createManyProducts = (request, response) => {
  if (Array.isArray(request.body) === false) {
    throw new Error('The request body must be an array.');
  }

  Product.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => {
      const createPromises = response.body.map((data) => Product.create(data));
      const settledOutcomes = Promise.allSettled(createPromises);
      return response.json(settledOutcomes);
    })
    .catch((err) => response.status(400).json({ ...err, message: err.message }));
};

const getAllProducts = (request, response) => {
  Product.find({})
    .then((product) => response.json(product))
    .catch((err) => response.status(400).json({ ...err, message: err.message }));
};

const getProduct = (request, response) => {
  Product.findOne({ _id: request.params.id })
    .then((product) => response.json(product))
    .catch((err) => response.status(400).json({ ...err, message: err.message }));
};

const updateProduct = (request, response, next) => {
  console.log('Request received at /api/edit/:id');

  Product.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
    context: 'query',
  })
    .then((updatedProduct) => response.json(updatedProduct))
    .catch((err) => {
      // response.status(400).json({ ...err, message: err.message })
      console.log('Server-side error:', err);
      // next(err)
      if (err.name === 'ValidationError') {
        response.status(400).json({ ...err, message: err.message });
      } else {
        next(err);
      }
    });
};

const deleteProduct = (request, response) => {
  Product.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.status(400).json({ ...err, message: err.message }));
};

export default {
  getAllProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct,
};
