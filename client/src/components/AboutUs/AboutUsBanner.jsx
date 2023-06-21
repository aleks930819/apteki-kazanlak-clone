import AboutUsImage from '../../assets/about-us.jpg';

const AboutUsBanner = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center ">
        <img
          src={AboutUsImage}
          alt="About Us Banner Logo"
          className="h-[60vh]
             w-full object-top
                object-cover
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
        text-6xl
        text-white        "
      >
        За нас
      </h1>
    </div>
  );
};

export default AboutUsBanner;
