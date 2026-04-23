// server/controllers/authController.js

import { login } from '../services/authServices.js';

export const handleLogin = (req, res) => {
    const { email, password } = req.body;

    const user = login(email, password);

    if (!user) {
        return res.status(401).json({
            message: 'Invalid credentials'
        });
    }

    // Store user in session (THIS is the real auth)
    req.session.user = user;

    // add temporarily to ouput current session
    req.session.save((err) => {
      if (err) {
        return res.status(500).json({
          message: 'Failed to save session'
        });
      }

      return res.status(200).json({
        message: 'Login successful',
        user: user
      });
    });
};


export const getCurrentUser = (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({
                message: 'Not authenticated'
            });
    }

    res.json({
        user: req.session.user
    });
};

export const logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if(err) {
      return res.status(500).json({
        message: 'Logout Failed'
      });
    }

    res.clearCookie('connect.sid');

    return res.json({
      message: 'Logged out successfully'
    });

  });

};