const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB CONNECTED');
  })
  .catch(e => {
    console.error('DB CONNECTION ERROR:', e);
  });

module.exports = mongoose;
