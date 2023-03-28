const Product = require('../models/product.model');

module.exports.index = (request, response) => {
  Product.find()
    .then((allProducts) => {
      response.json({ Person: allProducts });
    })
    .catch((err) => {
      response.status(400).json({ ...err, message: err.message });
    });
};

module.exports.createProduct = (request, response, next) => {
  Product.create(request.body)
    .then((product) => response.json(product))
    .catch((err) => {
      // response.status(400).json({...err, message: err.message })}
      next(err);
    });
};

// Need to test
module.exports.createManyProducts = (request, response) => {
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

module.exports.getAllProducts = (request, response) => {
  Product.find({})
    .then((product) => response.json(product))
    .catch((err) => response.status(400).json({ ...err, message: err.message }));
};

module.exports.getProduct = (request, response) => {
  Product.findOne({ _id: request.params.id })
    .then((product) => response.json(product))
    .catch((err) => response.status(400).json({ ...err, message: err.message }));
};

module.exports.updateProduct = (request, response, next) => {
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

module.exports.deleteProduct = (request, response) => {
  Product.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.status(400).json({ ...err, message: err.message }));
};
