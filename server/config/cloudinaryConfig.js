import cloudinary from 'cloudinary';

export const CLOUDINARY_CLOUD_NAME = 'dbrewse3d';
export const CLOUDINARY_API_KEY = '397664564716853';
export const CLOUDINARY_API_SECRET = 'NN7hwb0FzycQKKkPkhPfPoZCL9A';

cloudinary.v2.config({
  secure: true,
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export default cloudinary;
