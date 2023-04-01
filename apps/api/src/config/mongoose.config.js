const { urlencoded } = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const URL = process.env.MONGODB_URL;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Established a connection to the database'))
  .catch((err) => console.log('Something went wrong when connecting to the database', err));
