import express from 'express';
import multer from 'multer';

import cloudinary from '../config/cloudinaryConfig.js';

import path from 'path';
import fs from 'fs';

const router = express.Router();

import adminMiddleware from '../middleware/authMiddleware.js';

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads');
//   },

//   filename: function (req, file, cb) {
//     cb(
//       null,
//       `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
//     );
//   },
// });

const storage = multer.diskStorage({});

const upload = multer({ storage: storage });

// function checkFileType(file, cb) {
//   const filetypes = /jpg|jpeg|png/;

//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = filetypes.test(file.mimetype);
//   if (extname && mimetype) {
//     return cb(null, true);
//   } else {
//     cb('Разрешени са само снимки');
//   }
// }

// router.post('/', adminMiddleware, upload.single('image'), async (req, res) => {
//   if (!req.file) {
//     res.status(400).json({ message: 'No file uploaded' });
//     return;
//   }

//   checkFileType(req.file, (err, isMatch) => {
//     if (err) {
//       res.status(400).json({ message: err });
//       return;
//     }

//     res.json({
//       message: 'Image uploaded successfully',
//       url: `http://localhost:5000/uploads/${req.file.filename}`,
//       filename: req.file.filename,
//     });
//   });
// });

router.post('/', upload.single('image'), async (req, res) => {
  console.log(req.file);

  if (!req.file) {
    res.status(400).json({ message: 'No file uploaded' });
    return;
  }

  const result = await cloudinary.v2.uploader.upload(req.file.path);

  res.json({
    message: 'Image uploaded successfully',
    url: result.secure_url,
    filename: result.public_id,
  });
});

// router.delete('/:filename', adminMiddleware, async (req, res) => {
//   const filename = req.params.filename;
//   const filePath = path.join('uploads/', filename);

//   if (fs.existsSync(filePath)) {
//     fs.unlinkSync(filePath);
//     res.status(204).json({ message: 'Image deleted successfully' });
//   } else {
//     res.status(404).json({ message: 'File not found' });
//   }
// });
router.delete('/:filename', adminMiddleware, async (req, res) => {
  const filename = req.params.filename;

  const result = await cloudinary.v2.uploader.destroy(filename);

  res.status(204).json({ message: 'Image deleted successfully' });
});

export default router;
