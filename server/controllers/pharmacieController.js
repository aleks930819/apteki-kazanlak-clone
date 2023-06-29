import asyncHandler from '../middleware/asyncHandler.js';
import Pharmacie from '../models/pharmacieModel.js';

import deleteImage from '../utils/deleteImage.js';

// @desc    Fetch all pharmacies
// @route   GET /api/pharmacies
// @access  Public
export const getAllPharmacies = asyncHandler(async (req, res) => {
  const pharmacies = await Pharmacie.find({});

  if (pharmacies) {
    res.status(200).json(pharmacies);
  } else {
    res.status(404).json({ message: 'Няма налични аптеки' });
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
    res.status(404).json({ message: 'Аптеката не е намерена' });
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
    managerImage,
    secondaryImage,
    mainImage,
    pharmacieImages,
    frontImage,
    workingWith,
    googleMap,
  } = req.body;

  if (
    !name ||
    !address ||
    !phone ||
    !history ||
    !managerName ||
    !workingHours ||
    !managerTitle ||
    !managerDescription ||
    !managerImage ||
    !secondaryImage ||
    !mainImage ||
    !frontImage ||
    !workingWith ||
    !pharmacieImages ||
    !googleMap
  ) {
    return res.status(400).json({ message: 'Моля попълнете всички полета!' });
  }

  const isPharmacyExist = await Pharmacie.findOne({ name: name });

  if (isPharmacyExist) {
    return res.status(400).json({ message: 'Аптеката вече съществува!' });
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
    managerImage,
    secondaryImage,
    mainImage,
    workingWith,
    frontImage,
    pharmacieImages,
    googleMap,
  });

  const createdPharmacy = await pharmacy.save();

  res.status(201).json(createdPharmacy);
});

// @desc    Delete pharmacy
// @route   DELETE /api/pharmacies/:slug
// @access  Private/Admin
export const deletePharmacy = asyncHandler(async (req, res) => {
  const isPharmacyExist = await Pharmacie.findOne({ slug: req.params.slug });

  if (!isPharmacyExist) {
    return res.status(404).json({ message: 'Pharmacy not found' });
  }

  const pharmacy = await Pharmacie.deleteOne({ slug: req.params.slug });

  if (pharmacy) {
    res.json({ message: 'Pharmacy removed' });
  } else {
    res.status(404).json({ message: 'Аптеката не е намерена' });
  }
});

// @desc    Update pharmacy
// @route   PATCH /api/pharmacies/:slug
// @access  Private/Admin
export const updatePharmacy = asyncHandler(async (req, res) => {
  const {
    name,
    address,
    history,
    phone,
    managerName,
    workingHours,
    managerTitle,
    managerDescription,
    mainImage,
    secondaryImage,
    managerImage,
    pharmacieImages,
    frontImage,
    workingWith,
  } = req.body;

  const pharmacy = await Pharmacie.findOne({ slug: req.params.slug });

  if (pharmacy) {
    pharmacy.name = name || pharmacy.name;
    pharmacy.address = address || pharmacy.address;
    pharmacy.history = history || pharmacy.history;
    pharmacy.phone = phone || pharmacy.phone;
    pharmacy.managerName = managerName || pharmacy.managerName;
    pharmacy.workingHours = workingHours || pharmacy.workingHours;
    pharmacy.managerTitle = managerTitle || pharmacy.managerTitle;
    pharmacy.managerDescription =
      managerDescription || pharmacy.managerDescription;
    pharmacy.mainImage = mainImage || pharmacy.mainImage;
    pharmacy.frontImage = frontImage || pharmacy.frontImage;
    pharmacy.secondaryImage = secondaryImage || pharmacy.secondaryImage;
    pharmacy.managerImage = managerImage || pharmacy.managerImage;
    pharmacy.pharmacieImages = pharmacieImages || pharmacy.pharmacieImages;
    pharmacy.workingWith = workingWith || pharmacy.workingWith;

    const updatedPharmacy = await pharmacy.save();

    res.status(200).json(updatedPharmacy);
  } else {
    res.status(404).json({ message: 'Аптеката не е намерена' });
  }
});
