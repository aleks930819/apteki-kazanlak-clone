import HeaderTitle from './HeaderTitle';
import HeaderLogo from './HeaderLogo';
import HeaderLinks from './HeaderLinks';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-[1000] flex w-full  items-center justify-center gap-[150px]  bg-white  pb-2 pt-2 shadow-lg">
      <div className="inline-flex items-center justify-center gap-4">
        <HeaderLogo />
        <HeaderTitle />
      </div>
      <nav>
        <HeaderLinks />
      </nav>
    </header>
  );
};

export default Header;
