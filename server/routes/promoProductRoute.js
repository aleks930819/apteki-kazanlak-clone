import express from 'express';
const router = express.Router();

import {
  addPromoProduct,
  deletePromoProduct,
  getAllPromoProducts,
  editPromoProduct,
} from '../controllers/promoProductController.js';

router.get('/', getAllPromoProducts);
router.post('/', addPromoProduct);
router.delete('/:id', deletePromoProduct).put('/:id', editPromoProduct);

export default router;
