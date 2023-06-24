import express from 'express';
const router = express.Router();

import {
  createPharmacy,
  getAllPharmacies,
  getSinglePharmacy,
} from '../controllers/pharmacieController.js';

router.get('/', getAllPharmacies).post('/', createPharmacy);

router.get('/:slug', getSinglePharmacy);

export default router;
