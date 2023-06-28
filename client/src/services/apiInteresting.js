import { BASE_URL } from '../config';

const API_URL = `${BASE_URL}/interesting`;

export const getNews = async () => {
  const response = await fetch(API_URL);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};

export const getSingleNews = async (slug) => {
  const response = await fetch(`${API_URL}/${slug}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export const createNewNews = async (news, token) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token || '',
    },
    body: JSON.stringify(news),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export const updateNews = async (news, slug, token) => {
  const response = await fetch(`${API_URL}/${slug}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token || '',
    },
    body: JSON.stringify(news),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};

export const deleteNewsBySlug = async (slug, token) => {
  const response = await fetch(`${API_URL}/${slug}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token || '',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
};
