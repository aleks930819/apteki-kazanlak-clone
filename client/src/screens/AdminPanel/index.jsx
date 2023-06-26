import { NavLink, Outlet } from 'react-router-dom';

import { MdLocalPharmacy } from 'react-icons/md';
import { FaMoneyBillWave } from 'react-icons/fa';
import { AiOutlineLogout } from 'react-icons/ai';
import { GiNewspaper } from 'react-icons/gi';

import Logo from '../../assets/logo.png';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const adminLinks = [
  {
    name: 'Аптеки',
    path: '/admin/pharmacies',
    icon: <MdLocalPharmacy />,
  },
  {
    name: 'Продукти на промоция',
    path: '/admin/promo-products',
    icon: <FaMoneyBillWave />,
  },
  {
    name: 'Интересно',
    path: '/admin/interesno',
    icon: <GiNewspaper />,
  },
  {
    name: 'Изход',
    path: '/',
    icon: <AiOutlineLogout />,
  },
];

const AdminPanelScreen = () => {
  useDocumentTitle('Административен панел');

  return (
    <>
      <div className="sidebar bottom-0 top-0 overflow-y-auto  border-r-2  border-black bg-primary p-2 text-center lg:fixed lg:left-0 lg:w-[300px]">
        {adminLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className="mt-3 flex cursor-pointer items-center rounded-md border-b-2 p-2.5 px-4 text-white duration-300 hover:bg-green-600"
          >
            {link.icon}
            <span className="ml-4 text-[15px] font-bold text-gray-200" to="/">
              {link.name}
            </span>
          </NavLink>
        ))}
        <div className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 transform lg:block">
          <img
            className=" h-[200px] w-[200px]
           bg-white 
          "
            src={Logo}
            alt="logo"
          />
        </div>
      </div>
      <div className="lg:ml-[300px] ">
        <Outlet />
      </div>
    </>
  );
};

export default AdminPanelScreen;
