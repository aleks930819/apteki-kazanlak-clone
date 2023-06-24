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
router.get('/:slug', getSingleNews);
router.delete('/:id', deleteNews).patch('/:id', editNews);

export default router;
