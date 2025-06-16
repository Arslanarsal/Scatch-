
# 🛒 Scatch Backend

A lightweight backend project built with **Node.js**, **Express.js**, and **MongoDB**. It handles user authentication, protected routes, and EJS-based views.

---

## ✅ Features

* User registration and login
* JWT authentication stored in cookies
* Protected routes using middleware
* Flash messages for login/logout
* EJS view rendering
* MongoDB connection with Mongoose

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (jsonwebtoken)
* EJS
* Cookie-parser, Express-session, Connect-flash

---

## 📁 Project Structure

```
├── config/            # MongoDB connection setup
├── controllers/       # Request handlers
├── middleWares/       # Authentication middleware
├── models/            # Mongoose schemas
├── routes/            # Express routers
├── views/             # EJS templates
├── public/            # Static assets
├── .env               # Environment variables
├── app.js             # Main application entry point
```

---

## 🔐 Environment Setup

Create a `.env` file:

```

---

## 🚀 How to Run

```bash
npm install
node app.js
```

---

## 📌 Routes Overview

### User Routes (`/user`)

* `GET /login` – Show login page
* `POST /login` – Process login
* `POST /register` – Register user
* `POST /logout` – Logout user

### Product Routes (`/product`)

* `GET /` – Test route
* `GET /shop` – Protected route (login required)

