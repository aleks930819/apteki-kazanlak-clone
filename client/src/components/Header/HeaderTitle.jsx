import { Link } from 'react-router-dom';

const HeaderTitle = () => {
  return (
    <Link to="/">
      <div className="flex flex-col">
        <span className="text-3xl font-semibold tracking-wide text-primary">
          Социални Аптеки
        </span>
        <span className="text-2xl font-semibold leading-8 tracking-wide text-primary">
          Казанлък
        </span>
      </div>
    </Link>
  );
};

export default HeaderTitle;
