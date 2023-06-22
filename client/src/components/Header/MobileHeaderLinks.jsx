import { Link } from 'react-router-dom';

const headerLinks = [
  {
    url: '/za-nas',
    title: 'За нас',
  },
  {
    url: '/history',
    title: 'История',
  },
  {
    url: '/pharmacies',
    title: 'Аптеки',
    hover: true,
  },
  {
    url: '/interesno',
    title: 'Интересно',
  },
  {
    url: '/promo',
    title: 'Промоции',
  },
];

const MobileHeaderLinks = () => {
  return (
    <div
      className="linear-background
fixed left-0 top-20 z-50 h-full w-full 
"
    >
      <ul className="flex flex-col items-center gap-8 pt-10 ">
        <li className="w-full border-b-[1px] border-primary pb-2 pl-10 text-2xl text-primary">
          <Link to="/za-nas">ЗА НАС</Link>
        </li>
        <li className="w-full border-b-[1px] border-primary pb-2 pl-10 text-2xl text-primary">
          <Link to="/history">ИСТОРИЯ</Link>
        </li>

        <li className="w-full border-b-[1px] border-primary pb-2 pl-10 text-2xl text-primary">
          <Link to="/pharmacies">АПТЕКИ</Link>
          <ul className="flex flex-col gap-1 pl-10">
            <li className="text-base ">
              <Link>ХИГИЯ</Link>
            </li>

            <li className="text-base">
              <Link>ХИГИЯ</Link>
            </li>

            <li className="text-base">
              <Link>ХИГИЯ</Link>
            </li>

            <li className="text-base">
              <Link>ХИГИЯ</Link>
            </li>

            <li className="text-base">
              <Link>ХИГИЯ</Link>
            </li>
          </ul>
        </li>

        <li className="w-full border-b-[1px] border-primary pb-2 pl-10 text-2xl text-primary">
          <Link to="/interesno">ИНТЕРЕСНО</Link>
        </li>

        <li className="w-full border-b-[1px] border-primary pb-2 pl-10 text-2xl text-primary">
          <Link to="/promo">ПРОМОЦИИ</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileHeaderLinks;
