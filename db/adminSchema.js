import { Schema, model } from 'mongoose';

const adminSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'ADMIN',
      immutable: true,
    },
  },
  { timestamps: true }
);

const Admin = model('admins', adminSchema);

export default Admin;
