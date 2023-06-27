import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getPharmacies } from '../../services/apiPharmacies';

import { useMemo } from 'react';

const MobileHeaderLinks = () => {
  const { isLoading, data: pharmacies } = useQuery({
    queryKey: ['pharmacies'],
    queryFn: getPharmacies,
  });

  const memoizedPharmacies = useMemo(() => pharmacies, [pharmacies]);

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
            {memoizedPharmacies?.map((pharmacy) => (
              <li className="text-base" key={pharmacy._id}>
                <Link to={`/pharmacies/${pharmacy.slug}`}>
                  {pharmacy.name.toUpperCase()}
                </Link>
              </li>
            ))}
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
