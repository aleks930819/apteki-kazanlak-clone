const HamburgerMenu = ({ openMenu, handleMenuToggle }) => {
  return (
    <div
      className="visible absolute right-4 top-4 space-y-2 lg:hidden"
      onClick={handleMenuToggle}
    >
      <div className="h-[3px] w-10 bg-primary"></div>
      <div className="h-[3px] w-10 bg-primary"></div>
      <div className="h-[3px] w-10 bg-primary"></div>
    </div>
  );
};

export default HamburgerMenu;
