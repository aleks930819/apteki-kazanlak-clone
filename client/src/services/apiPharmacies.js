import { BASE_URL } from '../config';

const API_URL = `${BASE_URL}/pharmacies`;

export const getPharmacies = async () => {
  const response = await fetch(API_URL);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export const getPharmacie = async (slug) => {
  const response = await fetch(`${API_URL}/${slug}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const addNewPharmacie = async (data, token) => {
  const response = await fetch(`${API_URL}`, {
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

export const updatePharmacieBySlug = async (slug, data, token) => {
  const response = await fetch(`${API_URL}/${slug}`, {
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

export const deletePharmacieBySlug = async (slug, token) => {
  const response = await fetch(`${API_URL}/${slug}`, {
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
