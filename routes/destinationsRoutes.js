import express from 'express';
import {
  createDestination, deleteDestination, getAllDestinations, getOneDestination, updateDestination
} from '../controllers/destinationsController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/', getAllDestinations);
router.get('/:id', getOneDestination);
router.post('/:placeId', verifyAdmin, createDestination);
router.patch('/:id', verifyAdmin, updateDestination);
router.delete('/:id/:placeId', verifyAdmin, deleteDestination);

export default router;