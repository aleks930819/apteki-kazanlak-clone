import express from 'express';
import multer from 'multer';
import cloudinary from '../config/cloudinaryConfig.js';

const router = express.Router();

// Multer and Cloudinary configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      res.status(400).json({ message: 'No file uploaded' });
      return;
    }

    const fileStr = file.buffer.toString('base64');

    const uploadResponse = await cloudinary.uploader.upload(
      `data:${file.mimetype};base64,${fileStr}`,
      {
        upload_preset: 'jmrhx8e8',
      }
    );

    res.json({ url: uploadResponse.url, publicId: uploadResponse.public_id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});



export default router;
