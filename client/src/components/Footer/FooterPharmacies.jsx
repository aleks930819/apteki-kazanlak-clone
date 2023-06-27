import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { getPharmacies } from '../../services/apiPharmacies';

const FooterPharmacies = () => {
  const { data: pharmaciesData } = useQuery({
    queryKey: ['pharmacies'],
    queryFn: getPharmacies,
  });

  const memoizedPharmaciesData = useMemo(
    () => pharmaciesData,
    [pharmaciesData]
  );

  return (
    <div>
      <h2 className="border-b-[1px] border-white pb-2 text-start text-2xl">
        Нашите Аптеки
      </h2>
      <ul className="flex flex-col gap-2 pt-4">
        {memoizedPharmaciesData?.map((item) => (
          <li key={item.name} className="text-start text-sm">
            <div className="group relative">
              <Link to={`/pharmacies/${item.slug}`} className="relative">
                <span className="transition duration-300 hover:opacity-80">
                  {item.name}
                </span>
                <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 transform bg-white transition duration-300 group-hover:scale-x-100 "></span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterPharmacies;
