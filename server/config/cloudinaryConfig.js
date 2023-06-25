import cloudinary from 'cloudinary';

cloudinary.v2.config({
  secure: true,
  cloud_name:'dbrewse3d',
  api_key: '397664564716853',
  api_secret:'NN7hwb0FzycQKKkPkhPfPoZCL9A',
  upload_preset: 'jmrhx8e8',
});

export default cloudinary;
