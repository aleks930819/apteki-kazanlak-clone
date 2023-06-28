import { Link } from 'react-router-dom';

import MobileHeaderLinksPharmacies from './MobileHeaderLinksPharmacies';

const MobileHeaderLinks = () => {
  return (
    <div
      className="linear-background fixed left-0 top-14 sm:top-20 z-50 h-full w-full 
"
    >
      <ul className="flex flex-col items-center gap-8 pt-10 ">
        <li className="w-full border-b-[1px] border-primary pb-2 pl-10 text-2xl text-primary">
          <Link to="/za-nas">ЗА НАС</Link>
        </li>
        <li className="w-full border-b-[1px] border-primary pb-2 pl-10 text-2xl text-primary">
          <Link to="/history">ИСТОРИЯ</Link>
        </li>

        <li className="mt-[-22px] w-full border-b-[1px] border-primary pb-2 pl-10 text-2xl text-primary">
          <Link to="/pharmacies">АПТЕКИ</Link>
          <MobileHeaderLinksPharmacies />
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
