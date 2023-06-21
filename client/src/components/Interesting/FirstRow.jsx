import { Link } from 'react-router-dom';
import HeroBannerLogo from '../../assets/about-us.jpg';

const FirstRow = () => {
  return (
    <ul
      className="mb-20 grid  grid-cols-1 gap-10
    sm:grid-cols-2 "
    >
      <li>
        <article>
          <div className="mb-5">
            <img
              src={HeroBannerLogo}
              alt="image"
              className="
              h-[260px] w-full
              object-cover
                  "
            />
          </div>
          <div>
            <h2 className="mb-5 text-2xl text-blue-dark">
              <a>Дермоанализ на лице</a>
            </h2>
            <p>Професионална диагностика на кожата с ESTHEDERM ДЕРМОЕКСПЕРТ</p>
          </div>
        </article>
      </li>
      <li>
        <article>
          <div className="mb-5">
            <img
              src={HeroBannerLogo}
              alt="image"
              className="
              h-[260px] w-full
              object-cover
                  "
            />
          </div>
          <div>
            <h2 className="mb-5 text-2xl text-blue-dark">
              <Link to="/interesno/name">Антибиотици</Link>
            </h2>
            <p>
              Всеки човек поне веднъж в живота си е приемал антибиотик, назначен
              от лекар ...
            </p>
          </div>
        </article>
      </li>
    </ul>
  );
};

export default FirstRow;
