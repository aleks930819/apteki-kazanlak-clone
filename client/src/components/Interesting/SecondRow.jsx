import Vacine from '../../assets//vaccine.jpg';
import Vitamins from '../../assets/vitamins.jpg';
import { Link } from 'react-router-dom';

const SecondRow = () => {
  return (
    <ul
      className="
    grid  grid-cols-1 gap-10  sm:grid-cols-3
    "
    >
      <li
        className="
          "
      >
        <article>
          <div className="mb-5">
            <img
              src={Vitamins}
              alt="image"
              className="
              h-[150px] w-full
              object-cover
                  "
            />
          </div>
          <div>
            <h2 className="mb-5 text-2xl text-blue-dark">
              <Link to="/interesno/name">Витамини</Link>
            </h2>
            <p>
              Всеки ден с храната нашият организъм приема известно количество
              витамини и минерали.
            </p>
          </div>
        </article>
      </li>
      <li
        className="
          "
      >
        <article>
          <div className="mb-5">
            <img
              src={Vacine}
              alt="image"
              className="
              h-[150px] w-full
              object-cover
                  "
            />
          </div>
          <div>
            <h2 className="mb-5 text-2xl text-blue-dark">
              <a>Витамини</a>
            </h2>
            <p>
              Всеки ден с храната нашият организъм приема известно количество
              витамини и минерали.
            </p>
          </div>
        </article>
      </li>
    </ul>
  );
};

export default SecondRow;
