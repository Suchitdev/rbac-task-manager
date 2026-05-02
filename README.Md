# RBAC Task Manager

A full-stack task manager application with authentication and role-based access control. Users can register, login, and manage their own tasks.

---

## Features

- User registration and login
- JWT authentication
- Role-based access (user/admin)
- Create, view, and delete tasks
- Protected API routes

---

## Tech Stack

Frontend:
- React (Vite)
- Axios

Backend:
- Node.js
- Express.js

Database:
- MongoDB

Authentication:
- JWT
- bcryptjs

---

## Project Structure

rbac-task-manager/
├── backend/
├── frontend/
├── README.md

---

## Installation

### Backend
cd backend  
npm install  
npm run dev  

Create a .env file:
MONGO_URI=your_mongodb_connection  
JWT_SECRET=your_secret_key  
PORT=5000  

---

### Frontend
cd frontend  
npm install  
npm run dev  

---

## API Endpoints

Auth:
POST /api/v1/auth/register  
POST /api/v1/auth/login  

Tasks:
GET /api/v1/tasks  
POST /api/v1/tasks  
DELETE /api/v1/tasks/:id  

---

## Author

SUCHIT DESHMUKH