import 'swiper/css';

import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import thirdImage from '../../assets/promo-banner-centrum.jpg';
import secondImage from '../../assets/slide2.jpg';
import firstImage from '../../assets/slide1.jpg';

import HeroCurrentImageShow from './HeroCurrentImageShow';
import HeroImagesChangeButtons from './HeroImagesChangeButtons';

const imagesArray = [
  {
    url: firstImage,
    title: 'Вашите аптеки',
    subTitle: 'с нашите грижи',
  },
  {
    url: secondImage,
    title: 'Интересно',
    link: '/interesno',
  },
  {
    url: thirdImage,
    title: 'Промоции',
    link: '/promo',
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      onSwiper={(swiper) => {
        swiper.on('slideChange', () => {
          setCurrentIndex(swiper.activeIndex);
        });
      }}
    >
      {imagesArray.map((image, index) => (
        <SwiperSlide key={index}>
          <div
            style={{ backgroundImage: `url(${image.url})` }}
            className="relative h-[30vh] bg-cover bg-center bg-no-repeat sm:h-[55vh]"
          >
            <div className="relative mx-auto flex w-full max-w-lg items-start justify-start p-4">
              <div className="mt-[65px] flex flex-col items-center gap-2 text-center sm:mt-[20vh]">
                <div className="flex flex-col gap-2">
                  <span className="bg-primary bg-opacity-90 px-4 text-center text-2xl text-white sm:py-1 sm:text-6xl">
                    {image.title}
                  </span>
                  {image.subTitle && (
                    <span className="bg-primary bg-opacity-90 px-4 text-center text-2xl text-white sm:py-1 sm:text-6xl">
                      {image.subTitle}
                    </span>
                  )}
                  {image.link && (
                    <Link
                      to={image.link}
                      className="linear-background t w-[fit-content] overflow-hidden rounded-md border-2 border-blue-dark px-[20px] py-[10px] text-sm font-semibold uppercase text-blue-dark
                       t-shadow
                      "
                    >
                      Виж още
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <HeroImagesChangeButtons handleNextImage handlePrevImage />
            <HeroCurrentImageShow currentImage={currentIndex} /> */
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
