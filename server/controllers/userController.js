import { updateUserById } from '../services/userServices.js';

export const handleGetUser = (req, res) => {
  const user = req.session.user;

  if (!user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  return res.json(user);
};

export const handleUpdateUser = (req, res) => {
  const sessionUser = req.session.user;

  if (!sessionUser) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const updatedUser = updateUserById(sessionUser.id, req.body);


  // keep session in sync
  req.session.user = updatedUser;

  return res.json(updatedUser);
};