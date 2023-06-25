import { useContext, useState } from 'react';

import HeaderTitle from './HeaderTitle';
import HeaderLogo from './HeaderLogo';
import HeaderLinks from './HeaderLinks';
// import PharmaciesDropdown from '../PharmaciesDropdown/PharmaciesDropdown';
import HamburgerMenu from '../../ui/HamburgerMenu';
// import useIsMobileView from '../../hooks/useIsMobileView';
import useIsDekstopView from '../../hooks/useIsDekstopView';
import MobileHeaderLinks from './MobileHeaderLinks';
import { AuthContext } from '../../context/AuthContext';
// import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [isDekstopView] = useIsDekstopView();
  const { user } = useContext(AuthContext);

  console.log(user);

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
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
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)',
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
              handleDropdownToggle={handleDropdownToggle}
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
    </header>
  );
};

export default Header;
