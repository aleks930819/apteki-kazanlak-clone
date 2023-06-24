import asyncHandler from '../middleware/asyncHandler.js';
import Pharmacie from '../models/pharmacieModel.js';

// @desc    Fetch all pharmacies
// @route   GET /api/pharmacies
// @access  Public
export const getAllPharmacies = asyncHandler(async (req, res) => {
  const pharmacies = await Pharmacie.find({});

  if (pharmacies) {
    res.status(200).json(pharmacies);
  } else {
    res.status(404);
    throw new Error('No pharmacies found.');
  }
});

// @desc    Fetch single pharmacy
// @route   GET /api/pharmacies/:slug
// @access  Public
export const getSinglePharmacy = asyncHandler(async (req, res) => {
  const { slug } = req.params;

  // find news by slug
  const news = await Pharmacie.findOne({ slug });

  if (news) {
    res.status(200).json(news);
  } else {
    res.status(404);
    throw new Error('News not found.');
  }
});

// @desc    Create new pharmacy
// @route   POST /api/pharmacies
// @access  Private/Admin
export const createPharmacy = asyncHandler(async (req, res) => {
  const {
    name,
    address,
    history,
    phone,
    managerName,
    workingHours,
    managerTitle,
    managerDescription,
  } = req.body;

  if (
    !name ||
    !address ||
    !phone ||
    !history ||
    !managerName ||
    !workingHours ||
    !managerTitle ||
    !managerDescription
  ) {
    return res.status(400).json({ message: 'Please fill all fields.' });
  }

  const pharmacy = new Pharmacie({
    name,
    address,
    history,
    phone,
    managerName,
    workingHours,
    managerTitle,
    managerDescription,
  });

  const createdPharmacy = await pharmacy.save();

  res.status(201).json(createdPharmacy);
});
