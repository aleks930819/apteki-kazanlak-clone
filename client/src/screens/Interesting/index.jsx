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
