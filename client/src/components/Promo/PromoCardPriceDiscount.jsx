const calculateDiscount = (newPrice, oldPrice) => {
  return Math.round((1 - newPrice / oldPrice) * 100);
};

const PromoCardPriceDiscount = ({ newPrice, oldPrice }) => {
  return (
    <span
      className="price-discount absolute right-[10px] top-[10px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-primary
         text-sm font-semibold text-white transition duration-300 ease-in-out"
    >
      -{calculateDiscount(newPrice, oldPrice)}%
    </span>
  );
};

export default PromoCardPriceDiscount;
