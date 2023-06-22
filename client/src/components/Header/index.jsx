import { useState } from 'react';

import HeaderTitle from './HeaderTitle';
import HeaderLogo from './HeaderLogo';
import HeaderLinks from './HeaderLinks';
import PharmaciesDropdown from '../PharmaciesDropdown/PharmaciesDropdown';
import HamburgerMenu from '../../ui/HamburgerMenu';
// import useIsMobileView from '../../hooks/useIsMobileView';
import useIsDekstopView from '../../hooks/useIsDekstopView';
// import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDekstopView] = useIsDekstopView();

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <header className="sticky top-0 z-[1000] flex w-full  items-center justify-center gap-[150px]  bg-white  pb-2 pt-2 shadow-lg">
      <div className="inline-flex w-full items-center justify-start gap-4 pl-2 lg:w-auto lg:justify-center lg:pl-0">
        <HeaderLogo />
        <HeaderTitle />
      </div>
      <nav>
        {isDekstopView ? (
          <HeaderLinks handleDropdownToggle={handleDropdownToggle} />
        ) : (
          <HamburgerMenu />
        )}
      </nav>
      {isDropdownVisible && <PharmaciesDropdown itsHover={isDropdownVisible} />}
    </header>
  );
};

export default Header;
