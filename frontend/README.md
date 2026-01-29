# 📝 To-Do Web App

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

todo-web-app/
├── backend/
│ ├── config/
│ │ ├── db.js # MongoDB connection
│ │ └── firebase.js # Firebase Admin SDK setup
│ ├── middleware/
│ │ └── authMiddleware.js # Protect routes with Firebase token
│ ├── models/
│ │ ├── Board.js # Board schema
│ │ └── Todo.js # Todo schema
│ ├── routes/
│ │ ├── boardRoutes.js # Board API endpoints
│ │ └── todoRoutes.js # Todo API endpoints
│ ├── firebaseServiceKey.json # Firebase service account key
│ ├── server.js # Main backend server
│ └── .env # Environment variables
├── frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ ├── pages/
│ │ │ ├── Login.jsx
│ │ │ ├── Register.jsx
│ │ │ └── Dashboard.jsx
│ │ └── auth/
│ │ └── AuthContext.jsx
│ ├── index.css
│ └── package.json
└── README.md

---

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