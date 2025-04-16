const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model('users', userSchema);

module.exports = User;
