import { useContext, useState } from 'react';

import { AuthContext } from '../../context/AuthContext';
import { MobileNavMenuContext } from '../../context/MenuCloseContext';

import HeaderTitle from './HeaderTitle';
import HeaderLogo from './HeaderLogo';
import HeaderLinks from './HeaderLinks';
import PharmaciesDropdown from '../PharmaciesDropdown/PharmaciesDropdown';
import MobileHeaderLinks from './MobileHeaderLinks';

import useIsDekstopView from '../../hooks/useIsDekstopView';

import HamburgerMenu from '../../ui/HamburgerMenu';

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDekstopView] = useIsDekstopView();

  const { isOpen } = useContext(MobileNavMenuContext);
  const { user } = useContext(AuthContext);

  const handleDropdownOpen = () => {
    setDropdownVisible(true);
  };

  const handleDropdownClose = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="mb-14 sm:mb-20">
      <header
        className="header-shadow fixed
       left-0
      top-0 z-[100] flex h-14 w-[100%] justify-center bg-white px-[2px] sm:h-20
      "
      >
        <div
          className="flex w-[100%] max-w-lg items-center justify-between
       px-[10px] sm:px-[20px]
       "
        >
          <div className="gap-15 flex items-center">
            <HeaderLogo />
            <HeaderTitle />
          </div>
          <nav>
            {isDekstopView ? (
              <HeaderLinks
                handleDropdownToggle={handleDropdownOpen}
                user={user}
              />
            ) : (
              <>
                <HamburgerMenu />
                {isOpen && <MobileHeaderLinks />}
              </>
            )}
          </nav>
        </div>
        <PharmaciesDropdown
          itsHover={isDropdownVisible}
          handleDropdownClose={handleDropdownClose}
        />
      </header>
    </div>
  );
};

export default Header;
