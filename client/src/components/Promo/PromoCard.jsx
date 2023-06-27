import PromoCardSummary from './PromoCardSummary';

const PromoCard = ({ image, name, description, newPrice, oldPrice }) => {
  return (
    <li className="promo-card-top promo-card-left promo-card relative m-2 mb-10 flex h-[450px] w-full cursor-cell  flex-col overflow-hidden transition duration-300 ease-in-out sm:w-[300px]">
      <div className="promo-card-right promo-card-bottom h-[60%]">
        <img src={image} alt="image" className="h-full w-full object-contain" />
        <PromoCardSummary
          name={name}
          description={description}
          newPrice={newPrice}
          oldPrice={oldPrice}
        />
      </div>
    </li>
  );
};

export default PromoCard;
