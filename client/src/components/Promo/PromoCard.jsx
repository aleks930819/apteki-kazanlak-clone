import PromoCardPrice from './PromoCardPrice';
import PromoCardPriceDiscount from './PromoCardPriceDiscount';

const PromoCard = ({ image, name, description, newPrice, oldPrice }) => {
  return (
    <li className="overflow-hidden promo-card-top flex flex-col promo-card-left promo-card relative m-2 mb-10 h-[450px]  w-full sm:w-[300px] cursor-cell transition duration-300 ease-in-out">
      <div className="promo-card-right promo-card-bottom h-[60%]">
        <img
          src={image}
          alt="image"
          className="h-full w-full object-contain"
        />
        <div className="flex-1 max-h-[200px] overflow-hidden px-2 py-2 text-center transition duration-300 ease-in-out group-hover:bg-white group-hover:bg-opacity-50">
          <h2 className="mb-2 text-2xl text-gray-900">{name}</h2>
          <p className="mb-2 text-sm text-gray-700">{description}</p>
          <PromoCardPrice newPrice={newPrice} oldPrice={oldPrice} />
          <PromoCardPriceDiscount newPrice={newPrice} oldPrice={oldPrice} />
        </div>
      </div>
    </li>
  );
};

export default PromoCard;
