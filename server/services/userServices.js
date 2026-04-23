import { users } from '../data/database.js';

export function updateUserById(id, newData) {

  const user = users.find((u) => u.id === id);

  if (!user) return null;

  if (newData.name) user.name = newData.name;
  if (newData.email) user.email = newData.email;

  return {
    id: user.id,
    name: user.name,
    email: user.email
  };
}