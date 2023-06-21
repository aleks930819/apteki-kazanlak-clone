// import HeroBanner from './HeroBanner';
import thirdImage from '../../assets/promo-banner-centrum.jpg';
import secondImage from '../../assets/slide2.jpg';
import firstImage from '../../assets/vitamins.jpg';
import { useState } from 'react';
import HeroCurrentImageShow from './HeroCurrentImageShow';
import HeroImagesChangeButtons from './HeroImagesChangeButtons';

const imagesArray = [
  {
    url: firstImage,
  },
  {
    url: secondImage,
  },
  {
    url: thirdImage,
  },
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevState) => {
      if (prevState === imagesArray.length - 1) {
        return 0;
      }
      return prevState + 1;
    });
  };

  const handlePrevImage = () => {
    setCurrentImage((prevState) => {
      if (prevState === 0) {
        return imagesArray.length - 1;
      }
      return prevState - 1;
    });
  };

  return (
    <section className="relative ">
      <div>
        <div
          className="duration-100"
          style={{
            backgroundImage: `url(${imagesArray[currentImage].url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '55vh',
          }}
        ></div>
      </div>
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
      <HeroImagesChangeButtons
        handleNextImage={handleNextImage}
        handlePrevImage={handlePrevImage}
      />
      <HeroCurrentImageShow currentImage={currentImage} />
    </section>
  );
};

export default Hero;
