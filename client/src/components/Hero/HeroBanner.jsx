const HeroBanner = ({ imageSrc, children }) => {
  const divStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '50vh',
  };

  return (
    <div>
      <div
        className="flex w-full items-center justify-center "
        style={divStyle}
      >
        <span className="bg-primary bg-opacity-90 px-4 py-1 text-center text-2xl text-white sm:text-6xl">
          Интересно
        </span>
      </div>
    </div>
  );
};

export default HeroBanner;
