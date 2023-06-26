import Logo from '../../assets/contacts-banner.jpg';
import PharmaciesDropdownItem from './PharmaciesDropdownItem';

const pharamicesLinks = [
  {
    path: '/pharmacies/xigiya',
    name: 'ХИГИЯ',
  },
  {
    path: '/pharmacies/farma-1-kazanlak',
    name: 'ФАРМА 1 КАЗАНЛЪК',
  },
  {
    path: '/pharmacies/arnika',
    name: 'АРНИКА',
  },
  {
    path: '/pharmacies/farmavist',
    name: 'ФАРМАВИСТ',
  },
  {
    path: '/pharmacies/farma-1-pavel-banya',
    name: 'ФАРМА 1 ПАВЕЛ БАНЯ',
  },
  {
    path: '/pharmacies/farma-1-centr',
    name: 'ФАРМА 1 ЦЕНТЪР',
  },
];

const PharmaciesDropdown = ({ itsHover, dropdownRef, handleDropdownClose }) => {
  return (
    <div
      ref={dropdownRef}
      className={`transition-height absolute left-0 top-[100%] flex h-[35vh] w-full bg-grey-lighter-2 duration-500 ${
        itsHover ? 'show' : ''
      }`}
      onMouseLeave={handleDropdownClose}
    >
      <div>
        <img src={Logo} alt="Logo" className="h-full w-full object-cover" />
      </div>

      <div className="ml-4 flex justify-center">
        <ul className="flex flex-col items-start justify-center gap-2 p-5">
          {pharamicesLinks.map((link) => (
            <PharmaciesDropdownItem
              key={link.name}
              path={link.path}
              name={link.name}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PharmaciesDropdown;
