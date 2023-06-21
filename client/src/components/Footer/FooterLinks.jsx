import { Link } from 'react-router-dom';

const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <h2 className="border-b-[1px] border-white pb-2 text-start text-2xl">
        {title}
      </h2>
      <ul className="flex flex-col gap-2 pt-4">
        {links.map((link) => (
          <li key={link.title} className="text-sm">
            <Link
              to={link.url}
              className="relative inline-block after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition after:duration-300 after:content-[''] hover:after:scale-x-100"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
