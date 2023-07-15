import express from 'express';
import { createPlace, deletePlace, getAllPlaces, getOnePlace, updatePlace } from '../controllers/placesControllers.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/', getAllPlaces);
router.get('/:id', getOnePlace);
router.post('/', verifyAdmin, createPlace);
router.patch('/:id', verifyAdmin, updatePlace);
router.delete('/:id', verifyAdmin, deletePlace);

export default router;