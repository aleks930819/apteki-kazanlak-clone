import { BASE_URL } from '../config';

const API_URL = `${BASE_URL}/interesting`;

export const getNews = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch promo products.');
  }

  const data = await response.json();
  return data;
};
