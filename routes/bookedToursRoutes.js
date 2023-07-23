import express from 'express';
import { createBookedTour, deleteBookedTour, getAllBookedTours, getOneBookedTour, updateBookedTour } from '../controllers/bookedToursController.js';

const router = express.Router();

router.get('/', getAllBookedTours);
router.get('/:id', getOneBookedTour);
router.post('/', createBookedTour);
router.patch('/:id', updateBookedTour);
router.delete('/:id', deleteBookedTour);

export default router;