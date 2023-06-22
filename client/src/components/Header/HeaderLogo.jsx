import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo.png';

const HeaderLogo = () => {
  return (
    <Link
      to="/"
      className="flex 
      h-[75px] w-[75px]
      items-center justify-center
        rounded-full border-[3px]
        border-primary
       "
    >
      <img
        src={LogoImage}
        alt="Logo"
        className="inline-block h-[45px]  sm:h-[65px]"
      />
    </Link>
  );
};

export default HeaderLogo;
