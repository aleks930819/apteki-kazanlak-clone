import { Link } from 'react-router-dom';

const SecondRow = ({ item }) => {
  return (
    <ul
      className="
    grid  grid-cols-1 gap-10  sm:grid-cols-3
    "
    >
      {item?.slice(2).map((item) => (
        <li key={item.id}>
          <article>
            <div className="mb-5">
              <img
                src={item.image}
                alt={item.title}
                className="h-[150px] w-full object-cover"
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

export default SecondRow;
