import { useQuery } from '@tanstack/react-query';

import HeroBannerLogo from '../../assets/slide2.jpg';

import useDocumentTitle from '../../hooks/useDocumentTitle';

import { getNews } from '../../services/apiInteresting';

import HeroBanner from '../../components/Interesting/HeroBanner';
import FirstRow from '../../components/Interesting/FirstRow';
import SecondRow from '../../components/Interesting/SecondRow';

import Spinner from '../../ui/Spinner';

const InterestingScreen = () => {
  useDocumentTitle('Интересно | Социални Аптеки Казанлък');

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
      <div className="mx-auto mb-20 mt-10  px-5 lg:max-w-[1180px]">
        <FirstRow item={allNews} />
        <SecondRow item={allNews} />
      </div>
    </div>
  );
};

export default InterestingScreen;
