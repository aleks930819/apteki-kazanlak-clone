import { useContext, useState } from 'react';

import { AuthContext } from '../context/AuthContext';

const useImagesUploader = () => {
  const [isLoadingImageUpload, setIsLoadingImageUpload] = useState(false);
  const [images, setImages] = useState([]);

  const { user } = useContext(AuthContext);

  const uploadImages = async (files) => {
    try {
      setIsLoadingImageUpload(true);
      const uploadPromises = files.map((file) => {
        const formData = new FormData();
        formData.append('image', file);

        return fetch('http://localhost:5000/api/uploads', {
          method: 'POST',
          body: formData,
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }).then((response) => response.json());
      });

      const uploadedImages = await Promise.all(uploadPromises);

      const imagesData = uploadedImages.map((data) => ({
        filename: data.filename,
        url: data.url,
      }));

      return imagesData;
    } catch (error) {
      console.log(error);

      return [];
    } finally {
      setIsLoadingImageUpload(false);
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

  return { isLoadingImageUpload, images, handleImagesUpload, setImages };
};

export default useImagesUploader;
