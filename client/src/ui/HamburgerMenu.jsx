const HamburgerMenu = ({ openMenu, handleMenuToggle }) => {
  const hamburgerLine =
    'h-1 w-10 my-1 rounded-full bg-primary transition ease transform duration-300';
  return (
    <div
      className="visible absolute right-4 top-2 space-y-1 lg:hidden"
      onClick={handleMenuToggle}
    >
      <button
        className="group flex h-10 w-12 flex-col items-center justify-center "
        onClick={handleMenuToggle}
      >
        <div
          className={`${hamburgerLine} ${
            openMenu ? 'opacity-1 translate-y-3 rotate-45 ' : ''
          }`}
        />
        <div
          className={`${hamburgerLine} ${openMenu ? 'opacity-0' : 'opacity-1'}`}
        />
        <div
          className={`${hamburgerLine} ${
            openMenu ? 'opacity-1 -translate-y-3 -rotate-45 ' : 'opacity-1 '
          }`}
        />
      </button>
    </div>
  );
};

export default HamburgerMenu;
