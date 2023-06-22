import { useLoaderData } from 'react-router-dom';
import HeroBannerLogo from '../../assets/slide2.jpg';
import HeroBanner from '../../components/Hero/HeroBanner';
import FirstRow from '../../components/Interesting/FirstRow';
import SecondRow from '../../components/Interesting/SecondRow';
import { getNews } from '../../services/apiInteresting';

const InterestingScreen = () => {
  const getAll = useLoaderData();

  return (
    <div>
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
          Интересно
        </span>
      </div>
      <div className="mx-auto mb-20 mt-10 p-5 lg:w-[80vw]">
        <FirstRow item={getAll} />
        <SecondRow item={getAll} />
      </div>
    </div>
  );
};

export const loader = async () => {
  const getAll = await getNews();
  return getAll;
};

export default InterestingScreen;
