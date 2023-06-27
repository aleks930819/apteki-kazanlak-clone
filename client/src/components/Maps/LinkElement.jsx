import logo from '../../assets/logo.png';

const LinkElement = ({ name, isActive, onClick, activatedItemId }) => {
  const linkClasses = `pl-[15px] bg-no-repeat bg-contain flex cursor-pointer items-center gap-2 text-base font-semibold text-primary ${
    isActive || activatedItemId === null ? 'opacity-1' : 'opacity-50'
  }`;

  return (
    <li
      className={linkClasses}
      style={{ backgroundImage: `url(${logo})` }}
      onClick={onClick}
    >
      {name}
    </li>
  );
};

export default LinkElement;
