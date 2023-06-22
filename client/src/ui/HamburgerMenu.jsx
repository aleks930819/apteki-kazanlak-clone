import { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute right-4 top-4 space-y-2" onClick={toggleMenu}>
      <div className="h-[3px] w-10 bg-primary"></div>
      <div className="h-[3px] w-10 bg-primary"></div>
      <div className="h-[3px] w-10 bg-primary"></div>
    </div>
  );
};

export default HamburgerMenu;
