# DevTrack — Developer Progress Tracker

A full-stack web application that helps development teams track their daily progress, maintain consistency streaks, and stay accountable.

> Built with Node.js, Express, MongoDB, and vanilla HTML/JS

---

## Problem Statement

Dev teams often track progress informally over WhatsApp or chat groups. DevTrack provides a structured system to log daily updates, view team feed, and measure consistency through streak tracking.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js + Express |
| Database | MongoDB + Mongoose |
| Auth | JWT + Bcrypt |
| Frontend | HTML + CSS + Vanilla JS |

---

## Features

- User Registration and Login with JWT Authentication
- Password Hashing using Bcrypt
- Post daily dev updates
- Team Feed — see what everyone is working on
- Personal Feed — filter your own updates
- Consistency Stats — total updates, last active date, streak tracking
- Protected routes using custom Auth Middleware

---

## Project Structure
```
progress-tracker/
├── backend/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js  # Signup, Login logic
│   │   └── updateController.js # CRUD + Stats + Streak
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT verification
│   ├── models/
│   │   ├── User.js            # User schema
│   │   └── Update.js          # Update schema
│   ├── routes/
│   │   ├── authRoutes.js      # /auth/signup, /auth/login
│   │   └── updateRoutes.js    # /update, /feed, /stats
│   ├── .env                   # Environment variables (not pushed)
│   ├── .gitignore
│   └── server.js              # Entry point
│
└── frontend/
    └── index.html             # Complete UI — Login, Dashboard, Feed
```

---

## API Endpoints

### Auth
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | /auth/signup | Register new user | No |
| POST | /auth/login | Login and get token | No |

### Updates
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| POST | /update | Post a new update | Yes |
| GET | /feed | Get all updates | No |
| GET | /user/:id | Get user's updates | No |
| GET | /stats/:id | Get streak and stats | No |
| PATCH | /update/:id | Edit an update | Yes |
| DELETE | /update/:id | Delete an update | Yes |

---

## Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/your-username/progress-tracker.git
cd progress-tracker
```

### 2. Backend setup
```bash
cd backend
npm install
```

### 3. Create `.env` file in backend folder
```
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run backend
```bash
nodemon server.js
```

### 5. Open frontend
```
Open frontend/index.html in your browser
```

---

## Key Concepts Used

- **JWT Authentication** — Stateless auth, token stored in localStorage
- **Bcrypt** — Password hashing with salt rounds
- **Middleware** — Protects private routes by verifying token
- **Mongoose Populate** — Links Update documents to User documents (like foreign key)
- **Streak Logic** — Compares consecutive update dates to calculate consistency

---

## Author

Shivam Dalal

