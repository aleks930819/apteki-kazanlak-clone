import { useState } from 'react';

import HeaderTitle from './HeaderTitle';
import HeaderLogo from './HeaderLogo';
import HeaderLinks from './HeaderLinks';
import PharmaciesDropdown from '../PharmaciesDropdown/PharmaciesDropdown';
// import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <header className="sticky top-0 z-[1000] flex w-full  items-center justify-center gap-[150px]  bg-white  pb-2 pt-2 shadow-lg">
      <div className="inline-flex items-center justify-center gap-4">
        <HeaderLogo />
        <HeaderTitle />
      </div>
      <nav>
        <HeaderLinks handleDropdownToggle={handleDropdownToggle} />
      </nav>
      {isDropdownVisible && <PharmaciesDropdown itsHover={isDropdownVisible} />}
    </header>
  );
};

export default Header;
