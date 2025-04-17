import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { connectDB } from './Config/db.js';
import routes from './routes/index.js'; // make sure it's a default export
import Details from './db/details-schema.js'; // make sure it's a default export

dotenv.config();

const App = express();
const port = process.env.PORT || 4009;

const __dirname = path.resolve();

App.use(express.json());
App.use(cors());

App.use('/api', routes);

App.get('/Details', async (req, res) => {
  const detail = await Details.find();
  res.status(200).json(detail);
});

App.post('/Details', async (req, res) => {
  const { body } = req;
  const detail = await Details.create(body);
  res.status(200).json(detail);
});

if (process.env.NODE_ENV === 'production') {
  App.use(express.static(path.join(__dirname, '/Frontend/dist')));
  App.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Frontend', 'dist', 'index.html'));
  });
}

App.listen(port, () => {
  connectDB();
  console.log(`App is running on port ${port}`);
});
