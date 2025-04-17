import express from 'express';
import adminRoutes from './Admin-routes.js'; // add `.js` extension for ES modules

const router = express.Router();

router.use('/admin', adminRoutes);

export default router;
