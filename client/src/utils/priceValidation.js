const priceValidation = (newPrice, oldPrice) => {
  const isNewPriceBigger = Number(newPrice) >= Number(oldPrice);
  const isNegativePrice = Number(newPrice) <= 0 || Number(oldPrice) <= 0;

  if (isNewPriceBigger) {
    return 'Новата цена трябва да е по-малка от старата!';
  }

  if (isNegativePrice) {
    return 'Цените трябва да са положителни числа!';
  }
};

export default priceValidation;
