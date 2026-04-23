import crypto from 'crypto';

export const hashPassword = (password) => {
    return crypto.createHash('sha256').update(password).digest('hex');
}

export const users = [
    {
        id: 1,
        name: 'Ridwan',
        email: 'ridwan@email.com',
        password: hashPassword('1234'),
    },
];
