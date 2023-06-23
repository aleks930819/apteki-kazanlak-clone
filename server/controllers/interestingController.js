import asyncHandler from '../middleware/asyncHandler.js';
import News from '../models/newsModel.js';

// @desc    Fetch all news
// @route   GET /api/interesting
// @access  Public
export const getAllNews = asyncHandler(async (req, res) => {
  const news = await News.find({});

  if (news) {
    res.status(200).json(news);
  } else {
    res.status(404);
    throw new Error('No news found.');
  }
});

// @desc   Fetch news by slug
// @route  GET /api/interesting/:slug
// @access Public
export const getSingleNews = asyncHandler(async (req, res) => {
  const { slug } = req.params;

  // find news by slug
  const news = await News.findOne({ slug });
  
  if (news) {
    res.status(200).json(news);
  } else {
    res.status(404);
    throw new Error('News not found.');
  }
});
