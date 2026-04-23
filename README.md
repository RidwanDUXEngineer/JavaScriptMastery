# AuthApp — Full-Stack Authentication System

A minimal, production-inspired authentication system built with **Node.js (Express), EJS, and Vanilla JavaScript**.

This project demonstrates **session-based authentication**, **protected routes**, and **progressive frontend enhancement** without relying on frameworks.


## Features

- Session-based authentication (no JWT)
- Protected routes (backend + frontend guards)
- Login / Logout flow
- User profile update (name + email)
- Dynamic UI rendering using modular JS components
- Minimal, modern UI (black & white, subtle borders, clean spacing)
- RESTful API structure


## Architecture Overview

- **Backend:** Express + express-session  
- **Frontend:** Vanilla JavaScript (modular, component-based)  
- **Rendering Strategy:** MPA (EJS shell + JS enhancement)  
- **State Management:** Server-side session  


## Project Structure

```
auth-app/
├── server/
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   │   └── authRoutes.js
│   ├── server.js
│   ├── views/
│   │   ├── index.ejs
│   │   ├── login.ejs
│   │   └── settings.ejs
│   └── data/
│       └── database.js
│
├── public/
│   ├── css/
│   │   ├── global.css
│   │   └── layout.css
│   ├── js/
│   │   ├── api.js
│   │   ├── auth.js
│   │   ├── guard.js
│   │   ├── toast.js
│   │   ├── components/
│   │   │   ├── Card.js
│   │   │   └── Header.js
│   │   └── auth-pages/
│   │       ├── indexPage.js
│   │       ├── loginPage.js
│   │       └── settingsPage.js
│   ├── .env
│   ├── package-lock.json
│   └── package.json
│
├── .env.example
├── .gitignore
├── README.md
└── ARCHITECTURE.md
```

## Authentication Flow

1. User submits login form  
2. Backend validates credentials  
3. Session is created (`req.session.user`)  
4. Frontend redirects to `/settings`  
5. Protected routes validate session  
6. User can update profile or logout  


## Setup

git clone https://github.com/RidwanDUXEngineer/JavaScriptMastery.git  
cd auth-app  
npm install  

Create a `.env` file:
bash```
SESSION_SECRET=your_secret_here  
PORT=3000 
```
bash```
Run the server:
bash```
npm run dev  
```

## API Endpoints

POST /api/auth/login → Login user  
GET /api/auth/me → Get current user  
POST /api/auth/logout → Logout user  
GET /api/users/me → Get user profile  
PUT /api/users/me → Update user profile  

## Author

Ridwan Usman  
UX Engineer
