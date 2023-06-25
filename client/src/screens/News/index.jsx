import NewsBanner from '../../components/News/NewsBanner';

import { useParams } from 'react-router-dom';
import { getSingleNews } from '../../services/apiInteresting';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../ui/Spinner';

const NewsScreen = () => {
  const { slug } = useParams();

  const { isLoading, data } = useQuery(['singleNews', slug], () =>
    getSingleNews(slug)
  );

  if (isLoading) {
    return <Spinner />;
  }

  const { image, title, description } = data;

  return (
    <>
      <NewsBanner image={image.url} />
      <section className="mx-auto bg-white px-[70px] py-[30px] lg:w-[75vw]">
        <div className="flex flex-col items-start justify-center">
          <h1 className="mb-4 text-4xl font-semibold text-gray-800">{title}</h1>
          <p className="mb-4 whitespace-pre-wrap">{description}</p>
        </div>
      </section>
    </>
  );
};

export default NewsScreen;
