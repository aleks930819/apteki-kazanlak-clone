import Ferveks from '../../assets/ferveks.jpeg';
import Magne from '../../assets/magne.png';
import PromoCard from '../../components/Promo/PromoCard';

const promoData = [
  {
    id: 1,
    title: 'Фервекс за възрастни прахчета х 8',
    imgURL: Ferveks,
    newPrice: '5.99',
    oldPrice: '7.99',
    summary: 'Прахчета за възрастни при простуда и грип',
  },
  {
    id: 2,
    title: 'Магне Б6 Форте табл.',
    imgURL: Magne,
    newPrice: '5.99',
    oldPrice: '7.99',
    summary: 'Подпомага намаляването на умората и изтощението',
  },
  {
    id: 4,
    title: 'Магне Б6 Форте табл.',
    imgURL: Magne,
    newPrice: '5.99',
    oldPrice: '7.99',
    summary: 'Подпомага намаляването на умората и изтощението',
  },
  {
    id: 6,
    title: 'Магне Б6 Форте табл.',
    imgURL: Magne,
    newPrice: '5.19',
    oldPrice: '5.92',
    summary: 'Подпомага намаляването на умората и изтощението',
  },
];

const PromoScreen = () => {
  return (
    <div className="mx-auto  w-[75vw] mt-5 ">
      <ul
        className=" grid grid-cols-1  items-center  sm:grid-cols-4 gap-2
      "
      >
        {promoData.map((item) => (
          <PromoCard
            key={item.id}
            title={item.title}
            imgURL={item.imgURL}
            newPrice={item.newPrice}
            oldPrice={item.oldPrice}
            summary={item.summary}
          />
        ))}
      </ul>
    </div>
  );
};

export default PromoScreen;
