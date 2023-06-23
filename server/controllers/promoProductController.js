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

// @desc Add promo product
// @route POST /api/promo
// @access Private/Admin
export const addPromoProduct = asyncHandler(async (req, res) => {
  const { name, image, oldPrice, description, newPrice } = req.body;

  const promoProduct = new PromoProduct({
    name,
    image,
    oldPrice,
    newPrice,
    description,
  });

  const createdPromoProduct = await promoProduct.save();

  res.status(201).json(createdPromoProduct);
});

// @desc    Delete promo product
// @route   DELETE /api/promo/:id
// @access  Private/Admin
export const deletePromoProduct = asyncHandler(async (req, res) => {
  const promoProduct = await PromoProduct.deleteOne({ _id: req.params.id });

  if (promoProduct) {
    res.json({ message: 'Promo product removed' });
  } else {
    res.status(404);
    throw new Error('Promo product not found');
  }
});

// @desc Edit promo product
// @route PUT /api/promo/:id
// @access Private/Admin

export const editPromoProduct = asyncHandler(async (req, res) => {

  const { name, image, oldPrice, description, newPrice } = req.body;

  const promoProduct = await PromoProduct.findById(req.params.id);

  if (promoProduct) {
    promoProduct.name = name;
    promoProduct.image = image;
    promoProduct.oldPrice = oldPrice;
    promoProduct.newPrice = newPrice;
    promoProduct.description = description;

    const updatedPromoProduct = await promoProduct.save();
    res.json(updatedPromoProduct);
  } else {
    res.status(404);
    throw new Error('Promo product not found');
  }

});
