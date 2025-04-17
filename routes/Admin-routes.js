import express from 'express';
import { signup, login } from '../Controllers/Admin-controllers.js'; // add `.js` extension

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;
