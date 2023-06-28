const PromoCardPrice = ({ newPrice, oldPrice }) => {
  return (
    <p className="flex items-center justify-center gap-2 text-center">
      <span
        className="
    text-2xl
    font-semibold
    text-red-500
    "
      >
        {newPrice} лв.
      </span>
      <span className="  text-gray-500 line-through">{oldPrice} лв.</span>
    </p>
  );
};

export default PromoCardPrice;
