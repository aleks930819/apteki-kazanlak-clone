const API_URL = 'http://localhost:5000/api/promo';

export const getPromoProducts = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch promo products.');
  }

  const data = await response.json();
  return data;
};
