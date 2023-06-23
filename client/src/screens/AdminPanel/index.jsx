import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const adminLinks = [
  {
    name: 'Аптеки',
    path: '/admin/pharmacies',
  },
  {
    name: 'Продукти на промоция',
    path: '/admin/promo-products',
  },
  {
    name: 'Интересно',
    path: '/admin/intersno',
  },
  {
    name: 'Изход',
    path: '/',
  },
];

const AdminPanelScreen = () => {
  return (
    <div className="flex flex-col">
      <div className="sidebar fixed bottom-0 top-0  w-[300px] overflow-y-auto border-r-2 border-black bg-primary p-2 text-center lg:left-0">
        {adminLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className="mt-3 flex cursor-pointer items-center rounded-md border-b-2 p-2.5 px-4 text-white duration-300 hover:bg-green-600"
          >
            <span className="ml-4 text-[15px] font-bold text-gray-200" to="/">
              {link.name}
            </span>
          </NavLink>
        ))}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform">
          <img
            className=" h-[200px] w-[200px]
             bg-white 
            "
            src={Logo}
            alt="logo"
          />
        </div>
      </div>
      <div className="ml-[300px] ">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanelScreen;
