import { useQuery } from '@tanstack/react-query';

import HeroBannerLogo from '../../assets/slide2.jpg';

import HeroBanner from '../../components/Hero/HeroBanner';
import FirstRow from '../../components/Interesting/FirstRow';
import SecondRow from '../../components/Interesting/SecondRow';
import { getNews } from '../../services/apiInteresting';

import Spinner from '../../ui/Spinner';

const InterestingScreen = () => {
  const { isLoading, data: allNews } = useQuery({
    queryKey: ['news'],
    queryFn: getNews,
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <HeroBanner imageSrc={HeroBannerLogo}>
        {/* <span
          className="text:2xl absolute left-[20%] top-[50%] bg-primary bg-opacity-90 px-[20px] py-1
          text-center
          text-white
          sm:text-6xl

          "
        >
          Интересно
        </span> */}
      </HeroBanner>

      <div className="mx-auto mb-20 mt-10 p-5 lg:w-[80vw]">
        <FirstRow item={allNews} />
        <SecondRow item={allNews} />
      </div>
    </div>
  );
};

export default InterestingScreen;
