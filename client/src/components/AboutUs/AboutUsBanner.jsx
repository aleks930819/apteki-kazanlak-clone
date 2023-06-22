import AboutUsImage from '../../assets/about-us.jpg';

const AboutUsBanner = () => {
  return (
    <div className="relative">
      <div className="flex sm:h-[60vh] flex-col items-center justify-center">
        <img
          src={AboutUsImage}
          alt="About Us Banner Logo"
          className="h-full
             w-full object-cover
                object-top
            "
        />
      </div>
      <h1
        className="
        absolute
        left-[20%]
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        transform
        text-2xl
        text-white
        sm:text-6xl        "
      >
        За нас
      </h1>
    </div>
  );
};

export default AboutUsBanner;
