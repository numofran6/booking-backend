import express from 'express';
import {
  countByDestination, countByType, createPlace, deletePlace, getAllPlaces, getOnePlace, updatePlace
} from '../controllers/placesControllers.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/', getAllPlaces);
router.get('/find/:id', getOnePlace);
router.post('/', verifyAdmin, createPlace);
router.patch('/:id', verifyAdmin, updatePlace);
router.delete('/:id', verifyAdmin, deletePlace);

router.get('/countDestinations', countByDestination)
router.get('/countType', countByType)

export default router; 