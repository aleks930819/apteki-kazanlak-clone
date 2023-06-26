import { Link } from 'react-router-dom';

const PharmaciesDropdownItem = ({ path, name }) => {
  return (
    <li className="text-base font-semibold text-primary">
      <Link to={path}>{name}</Link>
    </li>
  );
};

export default PharmaciesDropdownItem;
