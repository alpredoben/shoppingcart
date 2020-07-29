import express from 'express';
import UserController from '../controllers/UserController.mjs';


const router = express.Router();

/** USER */
router.get('/api/users/createadmin', UserController.createAdmin);
router.post('/api/users/login', UserController.signIn);
router.post('/api/users/register', UserController.signUp)

export default router