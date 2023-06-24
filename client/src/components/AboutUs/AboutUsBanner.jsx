import AboutUsImage from '../../assets/about-us.jpg';

const AboutUsBanner = () => {
  const divStyle = {
    backgroundImage: `url(${AboutUsImage})`,
  };
  return (
    <div
      style={divStyle}
      className="relative h-[30vh] bg-cover bg-no-repeat 
      object-top
    sm:h-[50vh]
    "
    >
      <div className="relative mx-auto flex w-full max-w-lg items-start justify-start p-4 ">
        <span
          className="  mt-[10vh] text-center text-2xl text-white
         font-light
        sm:mt-[20vh] sm:text-6xl 
      "
        >
          За нас
        </span>
      </div>
    </div>
  );
};

export default AboutUsBanner;
