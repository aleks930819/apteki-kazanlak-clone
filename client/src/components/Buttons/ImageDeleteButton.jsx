import { useContext, useState } from 'react';

import { AuthContext } from '../../context/AuthContext';

const ImageDeleteButton = ({ filename }) => {
  const [deleting, setDeleting] = useState(false);
  const { user } = useContext(AuthContext);

  const handleDelete = async () => {
    setDeleting(true);

    try {
      const response = await fetch(
        `http://localhost:5000/api/uploads/${filename}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      await response.json();
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
      {deleting ? 'Изтриване...' : 'Промени снимката'}
    </button>
  );
};

export default ImageDeleteButton;
