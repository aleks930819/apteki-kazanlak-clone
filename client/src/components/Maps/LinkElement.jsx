import logo from '../../assets/logo.png';

const LinkElement = ({ name, isActive, onClick }) => {
  const linkClasses = ` flex cursor-pointer items-center gap-2 text-base font-semibold text-primary ${
    isActive ? ' ' : 'opacity-50'
  }`;

  return (
    <li
      style={{
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'left center',
        paddingLeft: '15px',
      }}
      className={linkClasses}
      onClick={onClick}
    >
      {name}
    </li>
  );
};

export default LinkElement;
