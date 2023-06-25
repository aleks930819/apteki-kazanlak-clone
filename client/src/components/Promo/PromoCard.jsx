import React from 'react';
import PromoCardPrice from './PromoCardPrice';
import PromoCardPriceDiscount from './PromoCardPriceDiscount';

const PromoCard = ({ image, name, description, newPrice, oldPrice }) => {
  return (
    <div className="group">
      <li className="relative m-2 mb-10 h-[400px] w-full cursor-cell transition duration-300 ease-in-out">
        <div className="promo-card-left promo-card"></div>
        <div className="promo-card-top promo-card"></div>
        <div className="promo-card-right promo-card"></div>
        <div className="promo-card-bottom promo-card"></div>
        <div>
          <img src={image} alt="image" className="h-[200px] w-full object-cover" />
          <div className="max-h-[200px] overflow-hidden px-2 py-2 text-center transition duration-300 ease-in-out group-hover:bg-white group-hover:bg-opacity-50">
            <h2 className="mb-2 text-2xl text-gray-900">{name}</h2>
            <p className="mb-2 text-sm text-gray-700">{description}</p>
            <PromoCardPrice newPrice={newPrice} oldPrice={oldPrice} />
            <PromoCardPriceDiscount newPrice={newPrice} oldPrice={oldPrice} />
            <div className="promo-card-hover transition duration-300 ease-in-out group-hover:block">
              <span className="promo-card-hover-line top-left"></span>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default PromoCard;
