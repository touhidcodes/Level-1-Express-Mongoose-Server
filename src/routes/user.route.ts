import express from 'express';
import { userControllers } from '../controllers/user.controller';

const router = express.Router();

router.post('/register', userControllers.register);
router.post('/login', userControllers.login);
router.get('/', userControllers.getUsers);

export const UserRoutes = router;
