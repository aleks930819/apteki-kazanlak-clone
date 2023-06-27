import logo from '../../assets/logo.png';

const LinkElement = ({ name, isActive, onClick }) => {
  const linkClasses = `pl-[15px] bg-no-repeat bg-contain flex cursor-pointer items-center gap-2 text-base font-semibold text-primary ${
    isActive ? '' : 'opacity-50'
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
