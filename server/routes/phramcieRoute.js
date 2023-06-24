import express from 'express';
const router = express.Router();

import adminMiddleware from '../middleware/authMiddleware.js';

import {
  createPharmacy,
  deletePharmacy,
  getAllPharmacies,
  getSinglePharmacy,
  updatePharmacy,
} from '../controllers/pharmacieController.js';

router.get('/', getAllPharmacies).post('/', adminMiddleware, createPharmacy);

router
  .get('/:slug', getSinglePharmacy)
  .delete('/:slug', adminMiddleware, deletePharmacy)
  .patch('/:slug', adminMiddleware, updatePharmacy);

export default router;
