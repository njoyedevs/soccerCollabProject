import nodemailer from 'nodemailer';

import User from '../models/user.model.js';

const index = (request, response) => {
  User.find()
    .then((allUsers) => {
      response.json({ Person: allUsers });
    })
    .catch((err) => {
      response.status(400).json({ ...err, message: err.message });
    });
};

const createUser = (request, response, next) => {
  User.create(request.body)
    .then((user) => {
      // send welcome email to user
      const transporter = nodemailer.createTransport({
        service: 'Hotmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });
      const mailOptions = {
        from: process.env.EMAIL,
        to: user.email,
        subject: 'Welcome to our app! ⚽️ 🥅 ',
        text: `Hi ${user.firstName},\n\nThank you for signing up to FootyStats! We're excited to have you on board.\n\nBest regards,\nFootyStats Team`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`Email sent: ${info.response}`);
        }
      });

      response.json(user);
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

const getAllUsers = (request, response) => {
  User.find({})
    .then((user) => response.json(user))
    .catch((err) => response.status(400).json({ ...err, message: err.message }));
};

const getUser = (request, response) => {
  User.findOne({ _id: request.params.id })
    .then((user) => response.json(user))
    .catch((err) => response.status(400).json({ ...err, message: err.message }));
};

const updateUser = (request, response, next) => {
  console.log('Request received at /api/edit/:id');

  User.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
    context: 'query',
  })
    .then((updatedUser) => response.json(updatedUser))
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

const deleteUser = (request, response) => {
  User.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.status(400).json({ ...err, message: err.message }));
};

export default {
  getAllUsers,
  getUser,
  updateUser,
  createUser,
  deleteUser,
};
