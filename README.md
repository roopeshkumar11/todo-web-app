<!-- # 📝 To-Do Web App

A **full-stack task management application** where users can log in, create boards, and manage todos.  
Built with **React.js, Node.js, MongoDB**, and **Firebase authentication**.

---

## 🔹 Features
- Log in using **Firebase Email Authentication**
- Create multiple **boards**
- Add, update, and delete **todos** inside boards
- Perform **CRUD operations** on boards and todos
- Protected routes — only logged-in users can access dashboards
- Responsive UI with **React + Tailwind CSS**

---

## 🔹 Tech Stack
| Layer          | Technology                                    |
|----------------|-----------------------------------------------|
| Frontend       | React.js, React Router DOM, Axios, Tailwind CSS |
| Backend        | Node.js, Express.js                            |
| Database       | MongoDB (local or Atlas)                       |
| Authentication | Firebase Email Authentication                  |

---

## 🔹 Folder Structure

todoweb-app/
├── server/ # Backend (Node.js + Express + MongoDB + Firebase)
│ ├── config/ # Configuration files
│ │ ├── db.js # MongoDB connection setup
│ │ └── firebase.js # Firebase Admin SDK setup
│ ├── middleware/
│ │ └── authMiddleware.js # Protect routes using Firebase token
│ ├── models/
│ │ ├── Board.js # Board schema
│ │ └── Todo.js # Todo schema
│ ├── routes/
│ │ ├── boardRoutes.js # Board API endpoints
│ │ └── todoRoutes.js # Todo API endpoints
│ ├── firebaseServiceKey.json # Firebase service account key (⚠️ keep private)
│ ├── server.js # Backend server entry point
│ └── .env # Environment variables (MONGO_URI, PORT)
│
├── client/ # Frontend (React.js + Tailwind CSS)
│ ├── src/
│ │ ├── App.jsx # Root component
│ │ ├── main.jsx # React entry point
│ │ ├── pages/ # Page components
│ │ │ ├── Login.jsx # Login page
│ │ │ ├── Register.jsx # Registration page
│ │ │ └── Dashboard.jsx # Dashboard (boards + todos)
│ │ ├── components/ # Reusable UI components
│ │ └── auth/
│ │ └── AuthContext.jsx # Authentication context
│ ├── index.css # Global styles
│ └── package.json # Frontend dependencies
│
└── README.md # Project documentation

## 🔹 Setup Instructions

### 1️⃣ Backend Setup
1. Navigate to `backend/`:

```bash
cd backend
npm install
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/todoApp

Add Firebase service key:

Download from Firebase Console → Project Settings → Service Accounts → Generate Private Key

Save as backend/firebaseServiceKey.json

Start backend server:

npm run dev


Backend runs at: http://localhost:5000

Frontend Setup

Navigate to frontend/:

cd frontend


Install dependencies:

npm install


Start frontend:

npm run dev


Frontend runs at: http://localhost:5173

🔹 Firebase Setup

Go to Firebase Console: https://console.firebase.google.com/

Create a new project (or use existing)

Enable Email/Password Authentication under Authentication → Sign-in Method

Generate Service Account Key:

Project Settings → Service Accounts → Generate new private key

Save as backend/firebaseServiceKey.json

Do not commit this JSON file to GitHub

🔹 API Endpoints
Boards
Method	Endpoint	Description
GET	/api/boards	Get all boards for logged-in user
POST	/api/boards	Create a new board
DELETE	/api/boards/:id	Delete a board by ID
Todos
Method	Endpoint	Description
GET	/api/todos/:boardId	Get all todos for a board
POST	/api/todos	Create a new todo
PUT	/api/todos/:id	Update todo by ID
DELETE	/api/todos/:id	Delete todo by ID

Example using Axios:

// Get boards
axios.get("http://localhost:5000/api/boards", {
  headers: { Authorization: `Bearer ${token}` }
});

// Create todo
axios.post("http://localhost:5000/api/todos", {
  title: "New Task",
  boardId: "BOARD_ID_HERE"
}, {
  headers: { Authorization: `Bearer ${token}` }
});
 -->








# 📝 TodoWeb App (MERN + Firebase Auth)

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)]()
[![Version](https://img.shields.io/badge/version-1.0.0-blue)]()
[![License](https://img.shields.io/badge/license-MIT-lightgrey)]()

## 📖 What the Project Does

**TodoWeb App** is a full-stack task management application built with the **MERN stack** (MongoDB, Express.js, React, Node.js) and **Firebase Authentication**.  
It allows users to securely sign up, log in, and manage their daily tasks in a clean and responsive interface.

---

## 🌟 Why the Project is Useful

Key features:
- 🔐 **Firebase Authentication** – Secure login/signup with email & password or social providers.  
- ✅ **Add, Edit, Delete Tasks** – Manage todos easily.  
- 📅 **Mark as Complete/Incomplete** – Track progress at a glance.  
- 🔄 **Persistent Storage** – Tasks are saved in MongoDB.  
- 📱 **Responsive UI** – Works seamlessly across devices.  
- ⚡ **Fast & Scalable** – Powered by Node.js and Express backend.  

This app helps users stay organized and productive with a simple yet powerful interface, while ensuring secure access through Firebase.

---

## 🛠️ How Users Can Get Started

### Prerequisites
- Node.js >= 18  
- MongoDB (local or cloud instance like MongoDB Atlas)  
- Firebase project (for authentication)  
- npm or yarn  

### Installation

Clone the repository:
```bash
git clone https://github.com/your-username/todoweb-app.git
cd todoweb-app

# Backend
cd server
npm install

# Frontend
cd ../client
npm install

PORT=5000
MONGO_URI=your_mongodb_connection_string

REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

cd server
npm run dev

cd client
npm start

http://localhost:3000


---

🔥 This version now clearly highlights **Firebase Authentication** as part of the stack, with `.env` setup for frontend Firebase config.  

Would you like me to also add a **diagram of the architecture flow** (React → Firebase Auth → Express/Node → MongoDB) so contributors can instantly visualize how the pieces fit together?