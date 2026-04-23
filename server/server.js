import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url'

import apiRoutes from './routes/authRoutes.js';

import dotenv from 'dotenv';

dotenv.config({ quiet: true });

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
  httpOnly: true,
  secure: false,
  maxAge: 1000 * 60 * 60
}
}));

// temporary to confirm if session is being stored
app.use((req, res, next) => {
  console.log('Session data:', req.session);
  next();
});

app.use('/api', apiRoutes);


// temporary to watch for sessions
app.use((req, res, next) => {
  console.log('Session:', req.session);
  next();
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.render('index', {
    user: req.session.user || null,
    isAuthenticated: !!req.session.user
  });
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/settings', (req, res) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }
  res.render('settings');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});