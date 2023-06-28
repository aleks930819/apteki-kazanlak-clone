import { useQuery } from '@tanstack/react-query';

import { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { getPharmacies } from '../../services/apiPharmacies';
import { MobileNavMenuContext } from '../../context/MenuCloseContext';

const MobileHeaderLinksPharmacies = () => {
  const { data: pharmacies } = useQuery({
    queryKey: ['pharmacies'],
    queryFn: getPharmacies,
  });

  const memoizedPharmacies = useMemo(() => pharmacies, [pharmacies]);

  const { handleMenu } = useContext(MobileNavMenuContext);

  return (
    <ul className="flex flex-col gap-1 pl-10">
      {memoizedPharmacies?.map((pharmacy) => (
        <li className="text-base" key={pharmacy._id}>
          <Link to={`/pharmacies/${pharmacy.slug}`} onClick={handleMenu}>
            {pharmacy.name.toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileHeaderLinksPharmacies;
