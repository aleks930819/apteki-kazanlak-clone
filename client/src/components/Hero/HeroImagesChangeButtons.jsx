import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import { useSwiper } from 'swiper/react';

const HeroImagesChangeButtons = () => {
  const swiper = useSwiper();

  const handleNextImage = () => {
    swiper.slideNext();
  };

  const handlePrevImage = () => {
    swiper.slidePrev();
  };
  return (
    <div className="mx-auto flex w-full max-w-lg items-center justify-center p-4 ">
      <div className="mt-[100px] flex w-full  max-w-lg sm:mt-[200px] ">
        <div
          className="left-26 
  absolute
  bottom-0
  inline-flex
  items-center gap-2 bg-primary px-2 py-2 text-white"
        >
          <button>
            <BsArrowLeft size={30} onClick={handlePrevImage} />
          </button>
          <span>/</span>
          <button>
            <BsArrowRight size={30} onClick={handleNextImage} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroImagesChangeButtons;
