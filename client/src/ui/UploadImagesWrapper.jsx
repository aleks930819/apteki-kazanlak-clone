const UploadImagesWrapper = ({ heading, children }) => {
  return (
    <>
      <label className="text-xl mt-5 mb-5 font-semibold text-gray-800">{heading}</label>
      <div className="grid grid-cols-3 gap-10">{children}</div>
    </>
  );
};

export default UploadImagesWrapper;
