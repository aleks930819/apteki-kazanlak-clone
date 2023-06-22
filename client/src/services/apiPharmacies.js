import { BASE_URL } from '../config';

const API_URL = `${BASE_URL}/pharmacies`;

export const getPharmacies = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch pharmacies.');
  }

  const data = await response.json();
  return data;
};
