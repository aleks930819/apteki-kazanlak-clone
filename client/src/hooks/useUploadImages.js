import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const useImagesUploader = () => {
  const [isLoadingImageUpload, setIsLoadingImageUpload] = useState(false);
  const [images, setImages] = useState({
    mainImage: {
      url: '',
      filename: '',
    },
    secondaryImage: {
      url: '',
      filename: '',
    },
    managerImage: {
      url: '',
      filename: '',
    },
    pharmaciesImage1: {
      url: '',
      filename: '',
    },

    pharmaciesImage2: {
      url: '',
      filename: '',
    },
    pharmaciesImage3: {
      url: '',

      filename: '',
    },
  });

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

  const handleImagesUpload = async (e, imageName) => {
    const files = Array.from(e.target.files);

    try {
      setIsLoadingImageUpload(true);
      const uploadedUrls = await uploadImages(files);

      const newImages = uploadedUrls.map((url) => ({
        url: url.url,
        filename: url.filename,
      }));

      if (images[imageName] !== undefined) {
        await fetch(
          `http://localhost:5000/api/uploads/${images[imageName].filename}`,
          {
            method: 'DELETE',
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        setImages((prevImages) => ({
          ...prevImages,
          [imageName]: {
            url: newImages[0]?.url,
            filename: newImages[0]?.filename,
          },
        }));
      }

      setImages((prevImages) => ({
        ...prevImages,
        [imageName]: {
          url: newImages[0]?.url,
          filename: newImages[0]?.filename,
        },
      }));
    } finally {
      setIsLoadingImageUpload(false);
    }
  };

  return { isLoadingImageUpload, images, handleImagesUpload, setImages };
};

export default useImagesUploader;
