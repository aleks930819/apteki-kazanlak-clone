import logo from '../../assets/logo.png';

const LinkElement = ({ name, isActive, onClick, activatedItemId }) => {
  const linkClasses = `pl-[15px] bg-no-repeat bg-contain flex cursor-pointer items-center gap-2 text-base font-semibold text-primary ${
    isActive ? '' : 'opacity-50'
  }`;

  const allActiveClass =
    'pl-[15px] bg-no-repeat bg-contain flex cursor-pointer items-center gap-2 text-base font-semibold text-primary opacity-1';

  const isActiveItem = activatedItemId === null ? allActiveClass : linkClasses;

  return (
    <li
      className={isActiveItem}
      style={{ backgroundImage: `url(${logo})` }}
      onClick={onClick}
    >
      {name}
    </li>
  );
};

export default LinkElement;
