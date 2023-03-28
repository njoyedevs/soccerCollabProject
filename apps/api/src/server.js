const express = require('express');
const cors = require('cors');

const app = express();
require('./config/mongoose.config');
require('dotenv').config();

const port = process.env.PORT;

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true })); // This is new
require('./routes/product.routes')(app);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ ...error, message: error.message });
});
app.listen(port, () => console.log(`Listening on port: ${port}`));
