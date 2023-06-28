import { useContext } from 'react';
import { MobileNavMenuContext } from '../context/MenuCloseContext';

const HamburgerMenu = () => {
  const { isOpen, handleMenu } = useContext(MobileNavMenuContext);

  const hamburgerLine =
    'h-1 w-10 my-1 rounded-full bg-primary transition ease transform duration-300';
  return (
    <div
      className="visible absolute right-2 top-1 space-y-1 lg:hidden"
      onClick={handleMenu}
    >
      <button
        className="group flex h-10 w-12 flex-col items-center justify-center "
        onClick={handleMenu}
      >
        <div
          className={`${hamburgerLine} ${
            isOpen ? 'opacity-1 translate-y-3 rotate-45 ' : ''
          }`}
        />
        <div
          className={`${hamburgerLine} ${isOpen ? 'opacity-0' : 'opacity-1'}`}
        />
        <div
          className={`${hamburgerLine} ${
            isOpen ? 'opacity-1 -translate-y-3 -rotate-45 ' : 'opacity-1 '
          }`}
        />
      </button>
    </div>
  );
};

export default HamburgerMenu;
