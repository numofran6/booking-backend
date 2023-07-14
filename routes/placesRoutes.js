import express from 'express';
import { createPlace, updatePlace } from '../controllers/placesControllers.js';

const router = express.Router();

router.post('/', createPlace);
router.put('/:id', updatePlace);

export default router;