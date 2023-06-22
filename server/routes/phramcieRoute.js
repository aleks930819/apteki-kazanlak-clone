import express from 'express';
const router = express.Router();

import asyncHandler from '../middleware/asyncHandler.js';

import Pharmacie from '../models/pharmacieModel.js';

// @desc    Fetch all pharmacies
// @route   GET /api/pharmacies
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const pharmacies = await Pharmacie.find({});

    if (pharmacies) {
      res.status(200).json(pharmacies);
    } else {
      res.status(404);
      throw new Error('No pharmacies found.');
    }
  })
);

// @desc    Fetch single pharmacy
// @route   GET /api/pharmacies/:slug
// @access  Public
router.get(
  '/:slug',
  asyncHandler(async (req, res) => {
    const { slug } = req.params;
    const pharmacy = await Pharmacie.findOne({ slug });

    if (pharmacy) {
      res.status(200).json(pharmacy);
    } else {
      res.status(404);
      throw new Error('Pharmacy not found.');
    }
  })
);

export default router;
