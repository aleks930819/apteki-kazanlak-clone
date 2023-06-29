const PharmacieBanner = ({ name, mainImage }) => {
  const figStyle = {
    backgroundImage: `url(${mainImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top 15% center',
  };

  return (
    <figure
      style={figStyle}
      className="relative h-[35vh]  w-full bg-no-repeat sm:h-[55vh]"
    >
      <div className=" flex w-full max-w-lg  justify-center  "></div>

      <div className="mx-auto mt-[5vh] w-full  max-w-lg  px-[20px]  sm:mt-[20vh] ">
        <span
          className="
    animate-pop-in
    absolute
    bottom-[70px]
    transform
    bg-primary
    bg-opacity-90
    px-5
    py-0
    text-2xl
    text-white
    sm:text-3xl
    lg:px-6
    lg:py-1
    lg:text-6xl
  "
        >
          {name}
        </span>
      </div>
    </figure>
  );
};

export default PharmacieBanner;
