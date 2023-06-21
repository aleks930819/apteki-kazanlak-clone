import HeroBanner from './HeroBanner';
import HeroBannerLogo from '../../assets/promo-banner-centrum.jpg';

const Hero = () => {
  return (
    <section className="relative ">
      <HeroBanner imageSrc={HeroBannerLogo} />
      <div
        className="
        absolute
        left-[15%]
        top-[35%]
        flex
        flex-col
        items-center
        justify-center
        gap-4
      "
      >
        <span className="bg-primary bg-opacity-90 px-[20px] py-1 text-center text-6xl text-white">
          Промоции
        </span>
        <button
          className="linear-background  text-shadow-primary self-start rounded-md border-[1px]  border-blue-dark px-3 py-2 
        text-center 
        text-base font-semibold uppercase
        text-blue-dark
        "
        >
          Виж още
        </button>
      </div>
    </section>
  );
};

export default Hero;
