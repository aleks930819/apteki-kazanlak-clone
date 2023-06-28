import express from 'express';
import multer from 'multer';

import path from 'path';
import fs from 'fs';

const router = express.Router();

import adminMiddleware from '../middleware/authMiddleware.js';

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

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Разрешени са само снимки');
  }
}

router.post('/', adminMiddleware, upload.single('image'), async (req, res) => {
  if (!req.file) {
    res.status(400).json({ message: 'No file uploaded' });
    return;
  }
  console.log(req);

  checkFileType(req.file, (err, isMatch) => {
    if (err) {
      res.status(400).json({ message: err });
      return;
    }

    res.json({
      message: 'Image uploaded successfully',
      url: `https://apteki-kazanlak-server.onrender.com/uploads/images/${req.file.filename}`,
      filename: req.file.filename,
    });
  });
});

router.delete('/:filename', adminMiddleware, async (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join('uploads/', filename);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    res.status(204).json({ message: 'Image deleted successfully' });
  } else {
    res.status(404).json({ message: 'File not found' });
  }
});

export default router;
