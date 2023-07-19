import express from 'express';
import {
  countByDestination, countByType, createRegion, deleteRegion, getAllRegions, getOneRegion, updateRegion,
} from '../controllers/regionsController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/', getAllRegions);
router.get('/find/:id', getOneRegion);
router.post('/', createRegion); //admin
router.patch('/:id', updateRegion); //admin
router.delete('/:id', deleteRegion); //admin

router.get('/countDestinations', countByDestination)
router.get('/countType', countByType)

export default router; 