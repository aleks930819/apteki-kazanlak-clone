import express from 'express';
const router = express.Router();

import {
  createNews,
  getAllNews,
  getSingleNews,
  deleteNews,
  editNews,
} from '../controllers/interestingController.js';

router.get('/', getAllNews).post('/', createNews);
router
  .get('/:slug', getSingleNews)
  .delete('/:slug', deleteNews)
  .patch('/:slug', editNews);

export default router;
