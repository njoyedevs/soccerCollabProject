import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { config as mongooseConfig } from './config/mongoose.config.js';
import { apiRoutes } from './routes/api.routes.js';
import { userRoutes } from './routes/user.routes.js';

dotenv.config();

const app = express();
mongooseConfig();

const port = process.env.PORT;

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
apiRoutes(app);
userRoutes(app);

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).json({ ...error, message: error.message });
});
app.listen(port, () => console.log(`Listening on port: ${port}`));
