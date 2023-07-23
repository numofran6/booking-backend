import express from 'express';
import { createTourBuddy, deleteTourBuddy, getAllTourBuddies, getOneTourBuddy, updateTourBuddy } from '../controllers/tourBuddyController.js';


const router = express.Router();

router.get('/', getAllTourBuddies);
router.get('/:id', getOneTourBuddy);
router.post('/', createTourBuddy);
router.patch('/:id', updateTourBuddy);
router.delete('/:id', deleteTourBuddy);

export default router;