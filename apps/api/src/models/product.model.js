import mongoose from 'mongoose';

import pictureValidator from '../components/Validators.js';

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const ProductSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      minlength: [3, 'First name must be at least 3 characters long'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      minlength: [3, 'Last name must be at least 3 characters long'],
    },
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      minlength: [7, 'Full name must be at least 7 characters long'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      validate: {
        validator: (value) => emailRegExp.test(value),
        message: 'Invalid email format',
      },
      unique: true,
    },
    emailVerification: {
      type: Boolean,
      required: [true, 'Email verification status is required'],
    },
    picture: {
      type: String,
      validate: {
        validator: pictureValidator,
        message: 'Invalid file extension or MIME type.',
      },
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('loginregistration', ProductSchema);

export default Product;
