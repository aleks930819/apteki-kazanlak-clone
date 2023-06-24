import express from 'express';
const router = express.Router();

import {
  addPromoProduct,
  deletePromoProduct,
  getAllPromoProducts,
  editPromoProduct,
  getPromoProductById,
} from '../controllers/promoProductController.js';
import adminMiddleware from '../middleware/authMiddleware.js';

router.get('/', getAllPromoProducts);
router.post('/', adminMiddleware, addPromoProduct);
router
  .delete('/:id', adminMiddleware, deletePromoProduct)
  .patch('/:id', adminMiddleware, editPromoProduct)
  .get('/:id', getPromoProductById);

export default router;
