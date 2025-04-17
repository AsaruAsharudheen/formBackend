import Admin from '../db/adminSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email: email });
    if (admin) {
      return res.status(400).json({ message: 'Account already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 2);
    await Admin.create({
      email: email,
      password: hashedPassword,
    });

    return res.status(201).json({ message: 'You are signed up' });
  } catch (e) {
    res.status(500).json({ message: e.message, error: true });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email: email });

    if (!admin) {
      return res.status(400).json({ message: 'Email or Password incorrect' });
    }

    const isMatching = await bcrypt.compare(password, admin.password);
    if (!isMatching) {
      return res.status(400).json({ message: 'Email or Password incorrect' });
    }

    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.SECRET_KEY,
      {
        expiresIn: '7d',
      }
    );

    res.status(200).json({
      message: 'You are logged in',
      token: token,
      id: admin._id,
      role: 'ADMIN',
    });
  } catch (e) {
    res.status(500).json({ message: e.message, error: true });
  }
};
