import { useState } from 'react';

import { toast } from 'react-hot-toast';
import { CLOUDINARY_API_KEY, CLOUDINARY_CLUD } from '../../api';

// import cloudinary from '../cloudinaryConfig';

const ImageDeleteButton =  ({ publicId, onImageDelete }) => {
  const [deleting, setDeleting] = useState(false);
  const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLUD}/image/destroy`;
  console.log(publicId);

  const handleDelete = async () => {
    setDeleting(true);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          api_key: `${CLOUDINARY_API_KEY}`,
        },
      });

      const data = await response.json();

      console.log(data);

    } catch (error) {
      console.error('Error deleting image:', error);
    }

    setDeleting(false);
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={deleting}
      className="rounded bg-red-500 px-4 py-2 font-bold text-white duration-200
        hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50
      "
    >
      {deleting ? 'Изтриване...' : 'Изтрий снимката'}
    </button>
  );
};

export default ImageDeleteButton;
