import PromoCardSummary from './PromoCardSummary';

const PromoCard = ({ image, name, description, newPrice, oldPrice }) => {
  const divStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <li className=" promo-card-top promo-card-left promo-card relative flex h-[400px] w-full cursor-cell  flex-col overflow-hidden transition duration-300 ease-in-out sm:w-[300px]">
      <div className="promo-card-right promo-card-bottom">
        <div>
          <img
            src={image}
            alt={name}
            className="
          * 
        h-[200px]
        w-full
        object-contain object-center
        "
          />
        </div>
        <div>
          <PromoCardSummary
            name={name}
            description={description}
            newPrice={newPrice}
            oldPrice={oldPrice}
          />
        </div>
      </div>
    </li>
  );
};

export default PromoCard;
