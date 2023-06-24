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

export const getSingleNews = async (slug) => {
  const response = await fetch(`${API_URL}/${slug}`);

  if (!response.ok) {
    throw new Error('Failed to fetch single news');
  }

  const data = await response.json();
  return data;
};

export const createNewNews = async (news) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(news),
  });

  if (!response.ok) {
    throw new Error('Failed to create new news');
  }

  const data = await response.json();
  return data;
};

export const updateNews = async (news, slug) => {
  const response = await fetch(`${API_URL}/${slug}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(news),
  });

  if (!response.ok) {
    throw new Error('Failed to update news');
  }

  const data = await response.json();
  return data;
};

export const deleteNewsBySlug = async (slug) => {
  const response = await fetch(`${API_URL}/${slug}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete news');
  }

  const data = await response.json();
  return data;
};
