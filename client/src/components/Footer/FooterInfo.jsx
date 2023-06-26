import { Link } from 'react-router-dom';

const FooterInfoData = [
  {
    url: '/za-nas',
    title: 'За нас',
    effect: true,
  },
  {
    url: '/history',
    title: 'История',
    effect: true,
  },
  {
    url: '/pharmacies',
    title: 'Аптеки',
    effect: true,
  },
  {
    url: '/interesno',
    title: 'Интересно',
    effect: true,
  },
  {
    url: '/promo',
    title: 'Промоции',
    effect: true,
  },
];

const FooterInfo = () => {
  return (
    <div>
      <h2 className="border-b-[1px] border-white pb-2 text-start text-2xl">
        Социални Аптеки
      </h2>
      <ul className="flex flex-col gap-2 pt-4">
        {FooterInfoData.map((link) => (
          <li key={link.title} className="text-start text-sm">
            <div className="group relative">
              <Link to={link.url} className="relative">
                <span className="transition duration-300 hover:opacity-80">
                  {link.title}
                </span>
                <span className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 transform bg-white transition duration-300 group-hover:scale-x-100 "></span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterInfo;
