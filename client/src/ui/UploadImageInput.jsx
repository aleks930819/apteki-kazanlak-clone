const UploadImageInput = ({
  id,
  label,
  handleFileChange,
  image,
  disabled,
  imageName,
}) => {
  const inputMessage = image ? 'Промени снимката' : 'Качете снимка';

  return (
    <>
      <div className="flex w-full flex-col justify-center items-center">
        <label htmlFor={id} className="mb-2 font-bold text-gray-700">
          {label}
        </label>
        {image && (
          <img src={image} alt="image" className="h-[200px] w-[200px]" />
        )}
        <label
          htmlFor={id}
          className="inline-flex mt-4 cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2"
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
          <span className="text-gray-700">{inputMessage}</span>
        </label>

        <input
          type="file"
          id={id}
          accept="image/*"
          className="hidden"
          size={2 * 1024 * 1024}
          onChange={(e) => handleFileChange(e, imageName)}
          disabled={disabled}
        />
        {/* {value && (
            <span className="mt-2 text-sm text-gray-500">{value.name}</span>
          )} */}
      </div>
      {/* {image && (
        <div className="flex w-full flex-col items-center justify-center">
          <label htmlFor={id} className="mb-2 font-bold text-gray-700">
            {label}
          </label>
          <img src={image} alt="image" className="h-[200px] w-[200px]" />
          <label
            htmlFor={id}
            className="mt-5 inline-flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2"
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
            <span className="text-gray-700">Променете снимката</span>
          </label>

          <input
            type="file"
            id={id}
            accept="image/*"
            className="hidden"
            size={2 * 1024 * 1024}
            onChange={(e) => handleFileChange(e, imageName)}
            disabled={disabled}
          />
        </div>
      )} */}
    </>
  );
};

export default UploadImageInput;
