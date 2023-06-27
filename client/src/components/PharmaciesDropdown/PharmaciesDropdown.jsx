import Logo from '../../assets/contacts-banner.jpg';
import PharmaciesDropdownItem from './PharmaciesDropdownItem';

import { useQuery } from '@tanstack/react-query';
import { getPharmacies } from '../../services/apiPharmacies';

const PharmaciesDropdown = ({ itsHover, dropdownRef, handleDropdownClose }) => {
  const { data: pharmaciesData } = useQuery({
    queryKey: ['pharmacies'],
    queryFn: getPharmacies,
  });

  return (
    <div
      ref={dropdownRef}
      className={`transition-height absolute left-0 top-[100%] flex h-[35vh] w-full bg-grey-lighter-2 duration-100 ${
        itsHover ? 'show' : ''
      }`}
      onMouseLeave={handleDropdownClose}
    >
      <div className="h-full w-1/3 bg-cover bg-center">
        <img src={Logo} alt="Logo" className="h-full w-full object-cover" />
      </div>

      <div className="ml-4 flex justify-center">
        <ul className="flex flex-col items-start justify-center gap-2 p-5">
          {pharmaciesData?.map((pharmacie) => (
            <PharmaciesDropdownItem
              key={pharmacie.name}
              path={pharmacie.slug}
              name={pharmacie.name}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PharmaciesDropdown;
