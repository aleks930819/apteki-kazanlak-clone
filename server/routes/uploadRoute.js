import express from 'express';
import multer from 'multer';

import cloudinary from '../config/cloudinaryConfig.js';

const router = express.Router();

import adminMiddleware from '../middleware/authMiddleware.js';

const storage = multer.diskStorage({});

const upload = multer({ storage: storage });

router.post('/', upload.single('image'), async (req, res) => {
  if (!req.file) {
    res.status(400).json({ message: 'No file uploaded' });
    return;
  }

  const fileType = req.file.mimetype.split('/')[0];

  if (fileType !== 'image') {
    return res.status(400).json({ message: 'Само снимки!' });
  }

  const result = await cloudinary.v2.uploader.upload(req.file.path);

  res.json({
    message: 'Image uploaded successfully',
    url: result.secure_url,
    filename: result.public_id,
  });
});

router.delete('/:filename', adminMiddleware, async (req, res) => {
  const filename = req.params.filename;

  const result = await cloudinary.v2.uploader.destroy(filename);

  if (result.result !== 'ok') {
    res.status(404).json({ message: 'File not found' });
    return;
  }

  res.status(204).json({ message: 'Image deleted successfully' });
});

export default router;
