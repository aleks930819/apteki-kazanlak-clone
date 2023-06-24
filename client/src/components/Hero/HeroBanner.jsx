const HeroBanner = ({ imageSrc, children }) => {
  const divStyle = {
    backgroundImage: `url(${imageSrc})`,
  };

  return (
    <div
      style={divStyle}
      className="relative h-[30vh] bg-cover bg-center bg-no-repeat
      sm:h-[50vh]
      "
    >
      <div className="mx-auto flex w-full max-w-[1140px] items-center justify-center p-4 ">
        <div className="mt-[100px] flex w-full  max-w-[1140px] sm:mt-[200px] ">
          <span className="  bg-primary bg-opacity-90 px-4 py-1 text-center text-2xl text-white sm:text-6xl">
            Интересно
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
