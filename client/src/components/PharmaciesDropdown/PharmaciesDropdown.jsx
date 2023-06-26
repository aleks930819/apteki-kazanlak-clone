import { Link } from 'react-router-dom';
import Logo from '../../assets/contacts-banner.jpg';

const PharmaciesDropdown = ({ itsHover, dropdownRef, handleDropdownClose }) => {
  return (
    <div
      ref={dropdownRef}
      className={`transition-height absolute top-[100%] left-0 flex h-[35vh] w-full bg-grey-lighter-2 duration-500 ${
        itsHover ? 'show' : ''
      }`}
      onMouseLeave={handleDropdownClose}
    >
      <div>
        <img src={Logo} alt="Logo" className="h-full w-full object-cover" />
      </div>

      <div className="ml-4 flex justify-center">
        <ul className="flex flex-col items-start justify-center gap-2 p-5">
          <li className="text-base font-semibold text-primary">
            <Link to="/pharmacies/xigiya">Хигия</Link>
          </li>
          <li className="text-base font-semibold text-primary">
            <Link to="/pharmacies/farma-1-kazanlk">Фарма 1 Казанлък</Link>
          </li>
          <li className="text-base font-semibold text-primary">
            <Link to="/pharmacies/arnika">Арника</Link>
          </li>
          <li className="text-base font-semibold text-primary">
            <Link to="/pharmacies/farmavist">Фармавист</Link>
          </li>
          <li className="text-base font-semibold text-primary">
            <Link to="/pharmacies/farma-1-pavel-banya">Фарма 1 Павел Баня</Link>
          </li>
          <li className="text-base font-semibold text-primary">
            <Link to="/pharmacies/farma-1-centr">Фарма 1 Център</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PharmaciesDropdown;
