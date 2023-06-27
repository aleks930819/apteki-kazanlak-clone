import { useContext, useState, useRef } from 'react';

import { AuthContext } from '../../context/AuthContext';

import HeaderTitle from './HeaderTitle';
import HeaderLogo from './HeaderLogo';
import HeaderLinks from './HeaderLinks';
import PharmaciesDropdown from '../PharmaciesDropdown/PharmaciesDropdown';
import MobileHeaderLinks from './MobileHeaderLinks';

import useIsDekstopView from '../../hooks/useIsDekstopView';

import HamburgerMenu from '../../ui/HamburgerMenu';

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [isDekstopView] = useIsDekstopView();

  const { user } = useContext(AuthContext);

  const handleDropdownOpen = () => {
    setDropdownVisible(true);
  };

  const handleDropdownClose = () => {
    setDropdownVisible(false);
  };

  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header
      className="header-shadow sticky
       left-0
      top-0 z-[100] flex h-20 w-[100%] justify-center bg-white px-[2px]
      "
    >
      <div
        className="flex w-[100%] max-w-lg items-center justify-between
       px-[20px]
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
              <HamburgerMenu
                openMenu={openMenu}
                handleMenuToggle={handleMenuToggle}
              />
              {openMenu && <MobileHeaderLinks />}
            </>
          )}
        </nav>
      </div>
      <PharmaciesDropdown
        dropdownRef={dropdownRef}
        itsHover={isDropdownVisible}
        handleDropdownClose={handleDropdownClose}
      />
    </header>
  );
};

export default Header;
