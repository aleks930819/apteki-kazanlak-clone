import { useState } from 'react';
import { CLODUINARY_UPLOAD_PRESET, CLOUDINARY_URL } from '../../api';

const useImageUploader = () => {
  const [isLoadingImageUpload, setIsLoadingImageUpload] = useState(false);
  const [image, setImage] = useState(null);

  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', CLODUINARY_UPLOAD_PRESET);

      const response = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    try {
      setIsLoadingImageUpload(true);
      const imageUrl = await uploadImage(file);
      setImage(imageUrl);
    } finally {
      setIsLoadingImageUpload(false);
    }
  };

  return { isLoadingImageUpload, image, handleImageUpload };
};

export default useImageUploader;
