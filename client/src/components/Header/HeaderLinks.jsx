import { Link } from 'react-router-dom';

const headerLinks = [
  {
    url: '/za-nas',
    title: 'За нас',
  },
  {
    url: '/history',
    title: 'История',
  },
  {
    url: '/pharmacies',
    title: 'Аптеки',
    hover: true,
  },
  {
    url: '/interesno',
    title: 'Интересно',
  },
  {
    url: '/promo',
    title: 'Промоции',
  },
];

const HeaderLinks = ({ handleDropdownToggle }) => {
  return (
    <ul className="flex items-center gap-8">
      {headerLinks.map((link) => (
        <li key={link.title} className="text-secondary">
          <Link to={link.url}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderLinks;
