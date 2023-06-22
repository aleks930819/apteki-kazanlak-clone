import FooterContacts from './FooterContacts';
import FooterCopyRight from './FooterCopyRight';
import FooterLinks from './FooterLinks';
import FooterNomenclature from './FooterNomenclature';

const FooterLinksData = [
  {
    title: 'Социални Аптеки',
    links: [
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
    ],
  },
  {
    title: 'Нашите Аптеки',
    links: [
      {
        url: '/',
        title: 'ХИГИЯ',
      },
      {
        url: '/',
        title: 'ФАРМА 1 КАЗАНЛЪК',
      },
      {
        url: '/',
        title: 'АРНИКА',
      },
      {
        url: '/',
        title: 'ФАРМАВИСТ',
      },
      {
        url: '/',
        title: 'ФАРМА 1 ПАВЕЛ БАНЯ',
      },
      {
        url: '/',
        title: 'ФАРМА 1 ЦЕНТЪР',
      },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <footer className="mt-auto flex  w-full  flex-col items-center justify-between gap-10 bg-primary  text-white">
        <div className="mt-10 flex w-full flex-col gap-2 p-2 sm:w-auto sm:flex-row sm:gap-12 ">
          {FooterLinksData.map((item) => (
            <FooterLinks
              key={item.title}
              title={item.title}
              links={item.links}
            />
          ))}
          <FooterNomenclature />
          <FooterContacts />
        </div>
        <FooterCopyRight />
      </footer>
    </>
  );
};

export default Footer;
