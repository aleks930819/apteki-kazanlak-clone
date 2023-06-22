import PromoCardPrice from './PromoCardPrice';
import PromoCardPriceDiscount from './PromoCardPriceDiscount';

const PromoCard = ({ image, name, description, newPrice, oldPrice }) => {
  return (
    <li className="relative m-2 h-[400px] w-full cursor-cell transition duration-300 ease-in-out">
      <div className="group">
        <img
          src={image}
          alt="image"
          className="h-[200px] w-full object-cover"
        />
        <div className="max-h-[200px] overflow-hidden px-2 py-2 text-center transition duration-300 ease-in-out group-hover:bg-white group-hover:bg-opacity-50">
          <h2 className="mb-2 text-2xl text-grey-dark-2">{name}</h2>
          <p className="mb-2 text-sm text-grey-dark-2">{description}</p>
          <PromoCardPrice newPrice={newPrice} oldPrice={oldPrice} />
          <PromoCardPriceDiscount newPrice={newPrice} oldPrice={oldPrice} />
          <div
            className="promo-card-hover transition
          duration-300 ease-in-out group-hover:block
          "
          >
            <span className="promo-card-hover-line top-left "></span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PromoCard;
