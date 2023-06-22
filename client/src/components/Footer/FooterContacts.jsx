import { IoLogoFacebook } from 'react-icons/io';
import { Link } from 'react-router-dom';

const FooterContacts = () => {
  return (
    <div>
      <h2 className="border-b-[1px] border-white pb-2 text-start text-2xl">
        Контакти
      </h2>
      <ul className="flex flex-col pt-4">
        <li className="text-start text-sm">
          <div className="group relative">
            <span className="transition duration-300 hover:opacity-80">
              <Link
                to="https://www.facebook.com/profile.php?id=100063056989183"
                target="_blank"
              >
                <IoLogoFacebook size={30} />
              </Link>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FooterContacts;
