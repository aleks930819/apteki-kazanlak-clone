const calculateDiscount = (newPrice, oldPrice) => {
  return Math.round((1 - newPrice / oldPrice) * 100);
};

const PromoCardPriceDiscount = ({ newPrice, oldPrice }) => {
  return (
    <span
      className="absolute right-0 top-0 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-primary
       
            text-sm font-semibold text-white transition duration-300 ease-in-out
            hover:h-[50px] hover:w-[50px] hover:rounded-full hover:text-lg
      "
    >
      -{calculateDiscount(newPrice, oldPrice)}%
    </span>
  );
};

export default PromoCardPriceDiscount;
