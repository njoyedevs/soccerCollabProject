const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    //
    store: {
      type: String,
      required: [true, 'Store name is required'],
      minlength: [3, 'Store name must be at least 3 characters long'],
    },
    storeNumber: {
      type: Number,
      required: [true, 'Store number is required'],
      validate: {
        validator(v) {
          return v > 0;
        },
        message: 'Store number must be greater than 0',
      },
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('loginRegistration', ProductSchema);

module.exports = Product;
