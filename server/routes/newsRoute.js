import express from 'express';
const router = express.Router();

import adminMiddleware from '../middleware/authMiddleware.js';

import {
  createNews,
  getAllNews,
  getSingleNews,
  deleteNews,
  editNews,
} from '../controllers/interestingController.js';

router.get('/', getAllNews).post('/', adminMiddleware, createNews);
router
  .get('/:slug', getSingleNews)
  .delete('/:slug', adminMiddleware, deleteNews)
  .patch('/:slug', adminMiddleware, editNews);

export default router;
