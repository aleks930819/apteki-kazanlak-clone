import { BASE_URL } from '../config';

const handleResponse = async (response) => {
  if (!response.ok) {
    throw new Error('Request failed.');
  }

  const data = await response.json();
  return data;
};

export const makeRequest = async (url, method = 'GET', body, headers) => {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${BASE_URL}${url}`, options);
  const data = await handleResponse(response);
  return data;
  
};
