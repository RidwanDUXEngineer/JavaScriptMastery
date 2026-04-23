const BASE_URL = '/api';

async function request(endpoint, method = 'GET', data = null) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'same-origin',
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  let result = null;
  const contentType = response.headers.get('content-type');

  if (contentType && contentType.includes('application/json')) {
    result = await response.json();
  } else {
    result = await response.text();
  }

  if (!response.ok) {
    const message =
      typeof result === 'object' && result?.message
        ? result.message
        : 'Request failed';

    throw new Error(message);
  }

  return result;
}

export const api = {
  login: (data) => request('/auth/login', 'POST', data),
  getCurrentUser: () => request('/auth/me', 'GET'),
  logout: () => request('/auth/logout', 'POST'),
  getUserProfile: () => request('/users/me', 'GET'),
  updateUserProfile: (data) => request('/users/me', 'PUT', data),
};