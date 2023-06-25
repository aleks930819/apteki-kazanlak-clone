import express from 'express';
import multer from 'multer';
import cloudinary from '../config/cloudinaryConfig.js';
import { CLODUINARY_UPLOAD_PRESET } from '../config.js';

import path from 'path';
import fs from 'fs';

const router = express.Router();

// const storage = multer.memoryStorage();
// const upload = multer({ storage });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },

  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// function checkFileType(file, cb) {
//   const filetypes = /jpg|jpeg|png/;

// }

router.post('/', upload.single('image'), async (req, res) => {
  if (!req.file) {
    res.status(400).json({ message: 'No file uploaded' });
    return;
  }

  checkFileType(req.file, (err, isMatch) => {
    if (err) {
      res.status(400).json({ message: err });
      return;
    }
  });

  res.send({
    message: 'Image uploaded successfully',
    url: `http://localhost:5000/uploads/${req.file.filename}`,
    filename: req.file.filename,
  });
});

router.delete('/:filename', async (req, res) => {
  const filename = req.params.filename;

  const filePath = path.join('uploads/', filename);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    res.status(204).json({ message: 'Image deleted successfully' });
  } else {
    res.status(404).json({ message: 'File not found' });
  }
});

// router.post('/', upload.single('file'), async (req, res) => {
//   try {
//     const file = req.file;

//     if (!file) {
//       res.status(400).json({ message: 'No file uploaded' });
//       return;
//     }

//     const fileStr = file.buffer.toString('base64');

//     const uploadResponse = await cloudinary.uploader.upload(
//       `data:${file.mimetype};base64,${fileStr}`,
//       {
//         upload_preset: CLODUINARY_UPLOAD_PRESET,
//       }
//     );

//     console.log(uploadResponse.public_id);

//     res.json({ url: uploadResponse.url, publicId: uploadResponse.public_id });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// router.delete('/:publicId', async (req, res) => {
//   try {
//     console.log(req.params.publicId);

//     const publicId = req.params.publicId;

//     const deleteResponse = await cloudinary.uploader.destroy(publicId);

//     console.log(deleteResponse);

//     res.status(204).json({ message: 'Image deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

export default router;
