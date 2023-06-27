import AboutUsImage from '../../assets/about-us.jpg';

const AboutUsBanner = () => {
  const divStyle = {
    backgroundImage: `url(${AboutUsImage})`,
  };
  return (
    <figure
      style={divStyle}
      className="relative h-[30vh] bg-cover bg-no-repeat 
      object-top
    sm:h-[400px]
    "
    >
      <div className="relative mx-auto flex w-full max-w-lg items-start justify-start p-4 ">
        <span
          className="  mt-[10vh] text-center text-2xl text-white
         font-light
        sm:mt-[20vh] sm:text-6xl 
        opacity-60
      "
        >
          За нас
        </span>
      </div>
    </figure>
  );
};

export default AboutUsBanner;
