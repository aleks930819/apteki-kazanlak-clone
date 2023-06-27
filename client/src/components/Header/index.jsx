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
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: 'white',
        position: 'sticky',
        top: 0,
        left: 0,
        zIndex: 100,
        width: '100%',
        padding: '2px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, .5)',
      }}
      className="h-20 "
    >
      <div
        style={{
          display: 'flex',
          maxWidth: '1140px',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
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
