import express from 'express';
const router = express.Router();

import {
  createPharmacy,
  deletePharmacy,
  getAllPharmacies,
  getSinglePharmacy,
} from '../controllers/pharmacieController.js';

router.get('/', getAllPharmacies).post('/', createPharmacy);

router.get('/:slug', getSinglePharmacy).delete('/:slug', deletePharmacy);

export default router;
