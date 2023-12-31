import Woman from '../../assets/working-woman.jpg';

const PharmacieRowImage = ({ rounded, image }) => {
  const roundedClass = rounded ? 'rounded-t-md' : '';

  return (
    <div
      className={`h-70 ${roundedClass}  ml-auto w-full overflow-hidden lg:h-60 lg:w-[350px]`}
    >
      <img
        src={image || Woman}
        className="h-full w-full object-center transition-transform duration-200 ease-in-out hover:scale-110"
      />
    </div>
  );
};

export default PharmacieRowImage;
