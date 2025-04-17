import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
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

export default User;
