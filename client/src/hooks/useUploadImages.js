import { useState } from 'react';
import { CLODUINARY_UPLOAD_PRESET, CLOUDINARY_URL } from '../../api';

const useImagesUploader = () => {
  const [isLoadingImageUpload, setIsLoadingImageUpload] = useState(false);
  const [images, setImages] = useState([]);

  const uploadImages = async (files) => {
    try {
      const uploadPromises = files.map((file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLODUINARY_UPLOAD_PRESET);

        return fetch(CLOUDINARY_URL, {
          method: 'POST',
          body: formData,
        }).then((response) => response.json());
      });

      const uploadedImages = await Promise.all(uploadPromises);
      return uploadedImages.map((data) => data.secure_url);
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const handleImagesUpload = async (e) => {
    const files = Array.from(e.target.files);

    try {
      setIsLoadingImageUpload(true);
      const uploadedUrls = await uploadImages(files);
      setImages((prevImages) => [...prevImages, ...uploadedUrls]);
    } finally {
      setIsLoadingImageUpload(false);
    }
  };

  return { isLoadingImageUpload, images, handleImagesUpload };
};

export default useImagesUploader;
