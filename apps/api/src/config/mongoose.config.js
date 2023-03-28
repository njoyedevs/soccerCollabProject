const { urlencoded } = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const replaceThisUrl =
  'mongodb+srv://nicolasajoye:Njs7SktJmT8Ud3Aa@jokesapi.sjpkgmx.mongodb.net/SoccerTrackerDB?retryWrites=true&w=majority';
const URL = process.env.MONGODB_URL;

mongoose
  .connect(replaceThisUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Established a connection to the database'))
  .catch((err) => console.log('Something went wrong when connecting to the database', err));
