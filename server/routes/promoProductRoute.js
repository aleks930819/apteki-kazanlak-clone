import express from 'express';
const router = express.Router();

import {
  addPromoProduct,
  deletePromoProduct,
  getAllPromoProducts,
  editPromoProduct,
  getPromoProductById,
} from '../controllers/promoProductController.js';

router.get('/', getAllPromoProducts);
router.post('/', addPromoProduct);
router
  .delete('/:id', deletePromoProduct)
  .put('/:id', editPromoProduct)
  .get('/:id', getPromoProductById);

export default router;
