import express from 'express';
const router = express.Router();

import {
  getAllPharmacies,
  getSinglePharmacy,
} from '../controllers/pharmacieController.js';

router.get('/', getAllPharmacies);

router.get('/:slug', getSinglePharmacy);

export default router;
