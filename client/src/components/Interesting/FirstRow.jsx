import { Link } from 'react-router-dom';

const FirstRow = ({ item }) => {
  return (
    <ul
      className="mb-20 grid  grid-cols-1 gap-10
    sm:grid-cols-2 "
    >
      {item?.slice(0, 2).map((item) => (
        <li key={item.id}>
          <article>
            <div className="mb-5" style={{}}>
              <img
                src={item.image.url}
                alt={item.title}
                className="
             h-[150px]
              w-full
           object-cover
            object-center
            sm:h-[250px]
                  "
              />
            </div>
            <div>
              <h2 className="mb-5 text-2xl text-blue-dark">
                <Link
                  to={`/interesno/${item.slug}`}
                  className="hover:underline"
                >
                  {item.title}
                </Link>
              </h2>
              <p>{item.summary}</p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default FirstRow;
