import { api } from './api.js';

export async function getSessionUser() {
  try {
    const response = await api.getCurrentUser();
    return response.user;
  } catch (error) {
    return null;
  }
}

export async function isAuthenticated() {
  const user = await getSessionUser();
  return !!user;
}

export async function logoutUser() {
  try {
    await api.logout();
    return true;
  } catch (error) {
    return false;
  }
}