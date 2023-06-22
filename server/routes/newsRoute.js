import express from 'express';
const router = express.Router();

import asyncHandler from '../middleware/asyncHandler.js';
import News from '../models/newsModel.js';


router.get(
    '/',
    asyncHandler(async (req, res) => {
        const news = await News.find({});

        if (news) {
            res.status(200).json(news);
        } else {
            res.status(404);
            throw new Error('No news found.');
        }
    }
    )
);

export default router;