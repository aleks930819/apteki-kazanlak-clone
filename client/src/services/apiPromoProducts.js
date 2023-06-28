import { BASE_URL } from '../config';

const API_URL = `${BASE_URL}/promo`;

export const getPromoProducts = async () => {
  const response = await fetch(API_URL);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export const createNewPromoProduct = async (data, token) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token || '',
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message);
  }

  return responseData;
};

export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export const updateProductById = async (data, id, token) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token || '',
    },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message);
  }
  return responseData;
};

export const deleteProductById = async (id, token) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token || '',
    },
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message);
  }
  return responseData;
};
