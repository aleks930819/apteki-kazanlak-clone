const PharmacieBanner = ({ name, mainImage }) => {
  const figStyle = {
    backgroundImage: `url(${mainImage})`,
  };

  return (
    <figure
      style={figStyle}
      className="bg-no-repeat relative  h-[30vh] bg-cover sm:h-[60vh]
      "
    >
      <div className="mx-auto flex w-full max-w-lg items-center justify-center p-4 ">
        <div className="mt-[5vh] flex w-full  max-w-lg sm:mt-[20vh] ">
          <span
            className="
    animate-pop-in
    absolute
    bottom-[10vh]

    transform
    bg-primary
    bg-opacity-90
    px-4
    text-3xl
    text-white
    lg:bottom-16
    lg:left-64
    lg:px-6
    lg:py-1
    lg:text-6xl
  "
          >
            {name}
          </span>
        </div>
      </div>
    </figure>
  );
};

export default PharmacieBanner;
