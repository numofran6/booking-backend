import express from 'express';
import {
  createDestination, deleteDestination, getAllDestinations, getOneDestination, updateDestination
} from '../controllers/destinationsController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/', getAllDestinations);
router.get('/:id', getOneDestination);
router.post('/:placeId', createDestination); //admin
router.patch('/:id', updateDestination); //admin
router.delete('/:id/:placeId', deleteDestination); //admin

export default router;