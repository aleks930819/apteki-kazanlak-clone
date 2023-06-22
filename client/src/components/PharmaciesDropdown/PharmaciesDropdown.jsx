import { Link } from 'react-router-dom';
import Logo from '../../assets/contacts-banner.jpg';

const PharmaciesDropdown = ({ itsHover }) => {
  return (
    <div
      className={`transition-height absolute top-[90px] flex w-full bg-grey-lighter-2 duration-500 ease-in-out ${
        itsHover ? 'h-[25vh]' : 'h-0'
      }`}
    >
      <div>
        <img src={Logo} alt="Logo" className="h-full w-full object-cover" />
      </div>

      <div>
        <ul className="flex flex-col items-start justify-center gap-1 p-5">
          <li className="text-base text-primary">
            <Link to="/pharmacies/xigiya"> Хигия</Link>
          </li>
          <li className="text-base text-primary">
            <Link to="/pharmacies/farma-1-kazanlk text-primary">
              Фарма 1 Казанлък
            </Link>
          </li>
          <li className="text-base text-primary">
            <Link to="/pharmacies/arnika">Арника</Link>
          </li>
          <li className="text-base text-primary">
            <Link to="/pharmacies/farmavist">Фармавист</Link>
          </li>
          <li className="text-base text-primary">
            <Link to="/pharmacies/farma-1-pavel-banya">Фарма 1 Павел Баня</Link>
          </li>
          <li className="text-base text-primary">
            <Link to="/pharmacies/farma-1-centr"> Фарма 1 Център</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PharmaciesDropdown;
