// server/routes.js

import express from 'express';

import { 
    handleLogin,
    getCurrentUser,
    logoutUser
} from '../controllers/authController.js';

import { handleGetUser, handleUpdateUser } from '../controllers/userController.js';

import { requireAuth } from '../middleware/requireAuth.js';

const router = express.Router();

router.post('/auth/login', handleLogin);
router.post('/auth/logout', requireAuth, logoutUser);
router.get('/auth/me', requireAuth, getCurrentUser);

router.get('/users/me', requireAuth, handleGetUser);
router.put('/users/me', requireAuth, handleUpdateUser);


export default router;