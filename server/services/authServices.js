import { users, hashPassword } from '../data/database.js';

export const login = (email, password) => {
    const hashed = hashPassword(password);

    const user = users.find(
        (u) => u.email === email && u.password === hashed
    );

    if (!user) return null;

    return {
        id: user.id,
        name: user.name,
        email: user.email
    };
}