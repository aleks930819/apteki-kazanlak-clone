import { Link } from 'react-router-dom';

import MobileHeaderLinksPharmacies from './MobileHeaderLinksPharmacies';
import { useContext } from 'react';
import { MobileNavMenuContext } from '../../context/MenuCloseContext';

const MobileHeaderLinks = () => {
  const { handleMenu } = useContext(MobileNavMenuContext);

  return (
    <div
      className="linear-background fixed left-0 top-14 z-50 h-full w-full sm:top-20 
"
    >
      <ul className="flex flex-col items-center gap-8 pt-10 ">
        <li className="w-full border-b-[1px] border-primary pb-2 pl-10 text-2xl text-primary">
          <Link to="/za-nas" onClick={handleMenu}>
            ЗА НАС
          </Link>
        </li>
        <li className="w-full border-b-[1px] border-primary pb-2 pl-10 text-2xl text-primary">
          <Link to="/history" onClick={handleMenu}>
            ИСТОРИЯ
          </Link>
        </li>

        <li className="mt-[-22px] w-full border-b-[1px] border-primary pb-2 pl-10 text-2xl text-primary">
          <Link to="/pharmacies" onClick={handleMenu}>
            АПТЕКИ
          </Link>
          <MobileHeaderLinksPharmacies />
        </li>

        <li className="w-full border-b-[1px] border-primary pb-2 pl-10 text-2xl text-primary">
          <Link to="/interesno" onClick={handleMenu}>
            ИНТЕРЕСНО
          </Link>
        </li>

        <li className="w-full border-b-[1px] border-primary pb-2 pl-10 text-2xl text-primary">
          <Link to="/promo" onClick={handleMenu}>
            ПРОМОЦИИ
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileHeaderLinks;
