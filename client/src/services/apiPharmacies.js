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

export const getPharmacie = async (slug) => {
  const response = await fetch(`${API_URL}/${slug}`);

  if (!response.ok) {
    throw new Error('Failed to fetch pharmacy.');
  }

  const data = await response.json();
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

  if (!response.ok) {
    throw new Error('Failed to add new pharmacy.');
  }

  const responseData = await response.json();
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

  if (!response.ok) {
    throw new Error('Failed to update pharmacy.');
  }

  const responseData = await response.json();
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

  if (!response.ok) {
    throw new Error('Failed to delete pharmacy.');
  }

  const responseData = await response.json();
  return responseData;
};
