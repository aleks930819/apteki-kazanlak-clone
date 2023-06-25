const UploadImageInput = ({ id, label, handleFileChange, value, image }) => {
  return (
    <div className="flex w-full items-center  justify-between">
      <div className="flex w-full flex-col items-start">
        <label htmlFor={id} className="mb-2 font-bold text-gray-700">
          {label}
        </label>
        <label
          htmlFor={id}
          className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2"
        >
          <svg
            className="mr-2 h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="text-gray-700">Upload Photo</span>
        </label>
        <input
          type="file"
          id={id}
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        {value && (
          <span className="mt-2 text-sm text-gray-500">{value.name}</span>
        )}
      </div>
      {image && (
        <img
          src={image}
          alt="product"
          style={{ width: '100px', height: '100px' }}
        />
      )}
    </div>
  );
};

export default UploadImageInput;
