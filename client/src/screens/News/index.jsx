import NewsBanner from '../../components/News/NewsBanner';

import { useLoaderData } from 'react-router-dom';
import { getSingleNews } from '../../services/apiInteresting';

const NewsScreen = () => {
  const { title, description, image } = useLoaderData();

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

export const loader = async ({ params }) => {
  const singleNews = getSingleNews(params.slug);
  return singleNews;
};

export default NewsScreen;
