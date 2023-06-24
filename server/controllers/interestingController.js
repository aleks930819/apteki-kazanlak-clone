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

  const news = await News.findOne({ slug });

  if (news) {
    res.status(200).json(news);
  } else {
    res.status(404);
    throw new Error('News not found.');
  }
});

// @desc    Create news
// @route   POST /api/interesting
// @access  Private/Admin
export const createNews = asyncHandler(async (req, res) => {
  const { title, description, summary, image } = req.body;

  console.log(req.body);

  if (!title || !description || !image || !summary) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  const news = new News({
    title,
    description,
    image,
    summary,
  });

  const createdNews = await news.save();
  res.status(201).json(createdNews);
});

// @desc    Delete news
// @route   DELETE /api/interesting/:id
// @access  Private/Admin
export const deleteNews = asyncHandler(async (req, res) => {
  const news = await News.deleteOne({ _id: req.params.id });

  if (news) {
    res.json({ message: 'News removed' });
  } else {
    res.status(404);
    throw new Error('News not found');
  }
});

// @desc    Edit news
// @route   PATCH /api/interesting/:id
// @access  Private/Admin
export const editNews = asyncHandler(async (req, res) => {
  const { title, description, summary, image } = req.body;

  if (!title || !description || !image || !summary) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  const news = await News.findById(req.params.id);

  if (news) {
    news.title = title || news.title;
    news.description = description || news.description;
    news.image = image || news.image;
    news.summary = summary || news.summary;

    const updatedNews = await news.save();
    res.status(200).json(updatedNews);
  } else {
    res.status(404);
    throw new Error('News not found');
  }
});
