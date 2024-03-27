import express from 'express';
const router = express.Router();

import authController from '../controller/authController.js';

router.post('/login', authController.login);
router.get('/', (req, res) => res.send('hola mundo') );

export default router;