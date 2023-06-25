import cloudinary from 'cloudinary';
import {
  CLODUINARY_UPLOAD_PRESET,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLUD,
} from '../config.js';

cloudinary.v2.config({
  secure: true,
  cloud_name: CLOUDINARY_CLUD,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  upload_preset: CLODUINARY_UPLOAD_PRESET,
});

export default cloudinary;
