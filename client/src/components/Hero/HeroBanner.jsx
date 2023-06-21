// import HeroBannerLogo from '../../assets/slide2.jpg';
// import HeroBannerLogo from '../../assets/promo-banner-centrum.jpg';

const HeroBanner = ({ imageSrc }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center ">
        <img
          src={imageSrc}
          alt="Hero Banner Logo"
          className="h-[55vh] 
        w-full
          object-cover"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
