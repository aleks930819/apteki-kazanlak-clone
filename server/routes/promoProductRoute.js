import express from 'express';
const router = express.Router();

import asyncHandler from '../middleware/asyncHandler.js';
import PromoProduct from '../models/promoProductModel.js';
import { getAllPromoProducts } from '../controllers/promoProductController.js';

// @desc    Fetch all promo products
// @route   GET /api/promo
// @access  Public
router.get('/', getAllPromoProducts);

export default router;
