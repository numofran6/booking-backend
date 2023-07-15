import express from 'express';
import { createPlace, deletePlace, getAllPlaces, getOnePlace, updatePlace } from '../controllers/placesControllers.js';

const router = express.Router();

router.get('/', getAllPlaces);
router.post('/', createPlace);
router.get('/:id', getOnePlace);
router.put('/:id', updatePlace);
router.delete('/:id', deletePlace);

export default router;