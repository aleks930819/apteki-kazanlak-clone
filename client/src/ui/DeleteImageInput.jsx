import ImageDeleteButton from './ImageDeleteButton';

const DeleteImageInput = ({ image, publicId }) => {
  console.log(publicId);
  return (
    <div className="mb-5 mt-5 flex w-full flex-col items-center justify-center gap-4 ">
      {image && (
        <img
          src={image}
          alt="product"
          style={{ width: '100px', height: '100px' }}
        />
      )}
      <ImageDeleteButton publicId={publicId} />
    </div>
  );
};

export default DeleteImageInput;
