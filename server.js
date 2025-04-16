const express = require('express');
const db = require('./db');
const cors = require('cors');
require('dotenv').config('./.env');

const Details = require('./db/details-schema');

const App = express();

App.use(express.json());
App.use(cors());
const routes = require('./routes');
App.use('/api', routes);

App.get('/Details', async (req, res) => {
  const Detail = await Details.find();
  res.status(200).json(Detail);
});

App.post('/Details', async (req, res) => {
  const { body } = req;
  const Detail = await Details.create(body);
  res.status(200).json(Detail);
});

App.listen(4009, () => {
  console.log('App is running');
});
