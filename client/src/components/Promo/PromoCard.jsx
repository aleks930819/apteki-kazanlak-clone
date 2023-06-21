import PromoCardPrice from './PromoCardPrice';
import PromoCardPriceDiscount from './PromoCardPriceDiscount';

const PromoCard = ({ imgURL, title, summary, newPrice, oldPrice }) => {
  return (
    <li
      className="relative  m-2
      h-[400px]
      w-full
      cursor-cell
      transition duration-300 ease-in-out"
    >
      <div>
        <img
          src={imgURL}
          alt="image"
          className="h-[200px] w-full object-cover"
        />
      </div>
      <div className="max-h-[200px] overflow-hidden  px-2 py-2 text-center">
        <h2 className="mb-2 text-2xl text-grey-dark-2">{title}</h2>
        <p className="mb-2 text-sm text-grey-dark-2">{summary}</p>
        <PromoCardPrice newPrice={newPrice} oldPrice={oldPrice} />
        <PromoCardPriceDiscount newPrice={newPrice} oldPrice={oldPrice} />
      </div>
    </li>
  );
};

export default PromoCard;
