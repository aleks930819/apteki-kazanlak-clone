import { useQuery } from '@tanstack/react-query';

import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { getPharmacies } from '../../services/apiPharmacies';

const MobileHeaderLinksPharmacies = () => {
  const { data: pharmacies } = useQuery({
    queryKey: ['pharmacies'],
    queryFn: getPharmacies,
  });

  const memoizedPharmacies = useMemo(() => pharmacies, [pharmacies]);

  return (
    <ul className="flex flex-col gap-1 pl-10">
      {memoizedPharmacies?.map((pharmacy) => (
        <li className="text-base" key={pharmacy._id}>
          <Link to={`/pharmacies/${pharmacy.slug}`}>
            {pharmacy.name.toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileHeaderLinksPharmacies;
