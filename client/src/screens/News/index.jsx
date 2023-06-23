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
      <NewsBanner image={image} />
      <section className="mx-auto bg-white p-10 lg:w-[50vw]">
        <div className="flex flex-col items-start justify-center">
          <h1 className="mb-4 text-4xl font-semibold text-gray-800">{title}</h1>
          <br />
          <p className="mb-4">{description}</p>
        </div>
      </section>
    </>
  );
};

export default NewsScreen;
