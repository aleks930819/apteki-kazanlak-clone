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
      <HeroBanner imageSrc={HeroBannerLogo}></HeroBanner>
      <div className="mx-auto mb-20 mt-10 p-5 lg:max-w-lg">
        <FirstRow item={allNews} />
        <SecondRow item={allNews} />
      </div>
    </div>
  );
};

export default InterestingScreen;
