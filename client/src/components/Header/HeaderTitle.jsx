import { Link } from 'react-router-dom';

const HeaderTitle = () => {
  return (
    <Link to="/">
      <div className="flex flex-col pl-4">
        <span className=" text-base font-semibold tracking-wide text-primary sm:text-2xl lg:text-3xl pb-1">
          Социални Аптеки
        </span>
        <span className=" text-base font-semibold leading-8 tracking-wide text-primary sm:text-2xl lg:text-2xl">
          Казанлък
        </span>
      </div>
    </Link>
  );
};

export default HeaderTitle;
