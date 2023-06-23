import asyncHandler from '../middleware/asyncHandler.js';
import PromoProduct from '../models/promoProductModel.js';

// @desc    Fetch all promo products
// @route   GET /api/promo
// @access  Public
export const getAllPromoProducts = asyncHandler(async (req, res) => {
  const promoProducts = await PromoProduct.find({});

  if (promoProducts) {
    res.status(200).json(promoProducts);
  } else {
    res.status(404);
    throw new Error('No promo products found.');
  }
});