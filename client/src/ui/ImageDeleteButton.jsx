import { useState } from 'react';

import { toast } from 'react-hot-toast';

const ImageDeleteButton = ({ publicId, onImageDelete }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    setDeleting(true);

    try {
      const response = await fetch(
        `http://localhost5000/api/uploads/${publicId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();
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
