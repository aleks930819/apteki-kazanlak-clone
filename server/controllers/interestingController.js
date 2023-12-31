import asyncHandler from '../middleware/asyncHandler.js';
import News from '../models/newsModel.js';
import cloudinary from '../config/cloudinaryConfig.js';

// @desc    Fetch all news
// @route   GET /api/interesting
// @access  Public
export const getAllNews = asyncHandler(async (req, res) => {
  const news = await News.find({});

  if (news) {
    res.status(200).json(news);
  } else {
    res.status(404).json({ message: 'Няма налични статии' });
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
    res.status(404).json({ message: 'Статията не е намерeна' });
  }
});

// @desc    Create news
// @route   POST /api/interesting
// @access  Private/Admin
export const createNews = asyncHandler(async (req, res) => {
  const { title, description, summary, image } = req.body;

  if (!title || !description || !image || !summary) {
    return res.status(400).json({ message: 'Моля попълнете всички полета!' });
  }

  const isNewsExist = await News.findOne({ title: title });

  if (isNewsExist) {
    return res.status(400).json({ message: 'Статията вече съществува' });
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
// @route   DELETE /api/interesting/:slug
// @access  Private/Admin
export const deleteNews = asyncHandler(async (req, res) => {
  const isNewsExist = await News.findOne({ slug: req.params.slug });

  if (!isNewsExist) {
    return res.status(404).json({ message: 'Статията не е намерена' });
  }

  const imageFileName = isNewsExist.image.filename;

  if (imageFileName) {
    await cloudinary.uploader.destroy(imageFileName);
  }

  await News.deleteOne({ slug: req.params.slug });

  res.json({ message: 'Статията е премахната' });
});

// @desc    Edit news
// @route   PATCH /api/interesting/:slug
// @access  Private/Admin
export const editNews = asyncHandler(async (req, res) => {
  const { title, description, summary, image } = req.body;

  const news = await News.findOne({ slug: req.params.slug });

  if (news) {
    news.title = title || news.title;
    news.description = description || news.description;
    news.image = image || news.image;
    news.summary = summary || news.summary;

    const isNewsExist = await News.findOne({ title: title });

    if (isNewsExist) {
      return res.status(400).json({ message: 'Статията вече съществува' });
    }

    const updatedNews = await news.save();
    res.status(200).json(updatedNews);
  } else {
    res.status(404).json({ message: 'Статията не е намерена' });
  }
});
