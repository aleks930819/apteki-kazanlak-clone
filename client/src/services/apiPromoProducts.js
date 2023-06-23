import { BASE_URL } from '../config';

const API_URL = `${BASE_URL}/promo`;

export const getPromoProducts = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch promo products.');
  }

  const data = await response.json();
  return data;
};

export const createNewPromoProduct = async (data) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create promo product.');
  }

  const responseData = await response.json();
  return responseData;
};

export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch promo product.');
  }

  const data = await response.json();
  return data;
};

export const updateProductById = async (id, data) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to update promo product.');
  }

  const responseData = await response.json();
  return responseData;
};
