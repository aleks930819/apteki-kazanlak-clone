import { BASE_URL } from '../config';

const apiRequest = async (url, method = 'GET', body = null, headers) => {
  try {
    const data = await fetch(`${BASE_URL}${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    });
    if (!data.ok) {
      throw new Error('Failed to fetch data');
    }
    const result = await data.json();
    console.log(result);
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default apiRequest;
