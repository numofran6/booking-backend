import express from 'express';
import { createPlace } from '../controllers/placesControllers.js';

const router = express.Router();

router.post('/', createPlace);
router.put('/:id', createPlace);

export default router;