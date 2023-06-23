import express from 'express';
const router = express.Router();

import asyncHandler from '../middleware/asyncHandler.js';
import News from '../models/newsModel.js';
import {
  getAllNews,
  getSingleNews,
} from '../controllers/interestingController.js';

router.get('/', getAllNews);
router.get('/:slug', getSingleNews);


export default router;
