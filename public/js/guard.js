import { isAuthenticated } from './auth.js';

export async function requireAuth() {
  const loggedIn = await isAuthenticated();

  if (!loggedIn) {
    window.location.href = '/login';
  }
}

export async function redirectIfAuthenticated() {
  const loggedIn = await isAuthenticated();

  if (loggedIn) {
    window.location.href = '/settings';
  }
}