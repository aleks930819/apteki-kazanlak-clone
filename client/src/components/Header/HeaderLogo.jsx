import { Link } from 'react-router-dom';
import LogoImage from '../../assets/logo.png';



const HeaderLogo = () => {

  return (
    <Link to="/" >
      <div className="mr-1 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-primary sm:h-[70px] sm:w-[70px]">
        <img src={LogoImage} alt="Logo" className="h-10 sm:h-16" />
      </div>
    </Link>
  );
};

export default HeaderLogo;
