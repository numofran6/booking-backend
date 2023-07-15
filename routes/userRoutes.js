import express from 'express';
import { deleteUser, getAllUsers, getOneUser, updateUser } from '../controllers/usersController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/', verifyAdmin, getAllUsers);
router.get('/:id', verifyUser, getOneUser);
router.patch('/:id', verifyUser, updateUser);
router.delete('/:id', verifyUser, deleteUser);

export default router;