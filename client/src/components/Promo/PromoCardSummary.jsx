import PromoCardPrice from './PromoCardPrice';
import PromoCardPriceDiscount from './PromoCardPriceDiscount';

const PromoCardSummary = ({ name, description, oldPrice, newPrice }) => {
  return (
    <div className="max-h-[200px] flex-1 overflow-hidden px-2 py-2 text-center transition duration-300 ease-in-out group-hover:bg-white group-hover:bg-opacity-50">
      <h2 className="mb-2 text-2xl text-gray-900">{name}</h2>
      <p className="mb-2 text-sm text-gray-700">{description}</p>
      <PromoCardPrice newPrice={newPrice} oldPrice={oldPrice} />
      <PromoCardPriceDiscount newPrice={newPrice} oldPrice={oldPrice} />
    </div>
  );
};

export default PromoCardSummary;
