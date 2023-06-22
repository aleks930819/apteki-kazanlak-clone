import express from 'express';
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
import PromoProduct from '../models/promoProductModel.js';

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const promoProducts = await PromoProduct.find({});

    if (promoProducts) {
      res.status(200).json(promoProducts);
    } else {
      res.status(404);
      throw new Error('No promo products found.');
    }
  })
);

export default router;
