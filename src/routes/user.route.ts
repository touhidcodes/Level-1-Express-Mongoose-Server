import express from 'express';
import { userControllers } from '../controllers/user.controller';

const router = express.Router();

// Register user
router.post('/register', userControllers.register);
// Login user
router.post('/login', userControllers.login);
// Get all users
router.get('/', userControllers.getUsers);

export const UserRoutes = router;
