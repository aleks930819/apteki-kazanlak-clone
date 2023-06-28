import { Link } from 'react-router-dom';

const HeaderTitle = () => {
  return (
    <Link to="/">
      <div className="flex flex-col pl-1 sm:pl-4">
        <span className=" text-[18px] font-semibold tracking-wide text-primary sm:text-2xl lg:text-3xl sm:pb-1">
          Социални Аптеки
        </span>
        <span className=" text-[14px] font-semibold sm:leading-8 tracking-wide text-primary sm:text-2xl lg:text-2xl">
          Казанлък
        </span>
      </div>
    </Link>
  );
};

export default HeaderTitle;
