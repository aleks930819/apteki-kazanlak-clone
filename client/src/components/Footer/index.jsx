import FooterCopyRight from './FooterCopyRight';
import FooterLinks from './FooterLinks';

const FooterLinksData = [
  {
    title: 'Социални Аптеки',
    links: [
      {
        url: '/',
        title: 'За нас',
      },
      {
        url: '/history',
        title: 'История',
      },
      {
        url: '/pharmacies',
        title: 'Аптеки',
      },
      {
        url: '/interesno',
        title: 'Интересно',
      },
      {
        url: '/promo',
        title: 'Промоции',
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
  {
    title: 'Номенклатура',
    links: [
      {
        url: '/',
        title: 'ОТС продукти',
      },
      {
        url: '/',
        title: 'Лекарско предписание',
      },
      {
        url: '/',
        title: 'Лекарства, отпускани със зелени и жълти рецепти',
      },
      {
        url: '/',
        title: 'Лекарства, реимбурсирани от НЗОК',
      },
      {
        url: '/',
        title: 'Хранителни добавки',
      },
      {
        url: '/',
        title: 'Козметика',
      },
      {
        url: '/',
        title: 'Санитарни принадлежности',
      },
      {
        url: '/',
        title: 'Ортопедрични принадлежности',
      },
      {
        url: '/',
        title: 'Апарати за измерване на кръвно налягане',
      },
      {
        url: '/',
        title: 'Глюкомери',
      },
    ],
  },
  {
    title: 'Контакти',
    links: [
      {
        url: '/',
        title: 'За нас',
      },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <footer className="mt-auto flex  w-full  flex-col items-center justify-between gap-10 bg-primary  text-white">
        <div className="sm:w-auto mt-10 flex w-full flex-col gap-2 p-2 sm:flex-row sm:gap-12 ">
          {FooterLinksData.map((item) => (
            <FooterLinks
              key={item.title}
              title={item.title}
              links={item.links}
            />
          ))}
        </div>
        <FooterCopyRight />
      </footer>
    </>
  );
};

export default Footer;
