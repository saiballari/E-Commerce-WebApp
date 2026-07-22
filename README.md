# 🛍️ NovaCart — Premium Full-Stack E-Commerce Platform

A modern, production-ready full-stack e-commerce web application built with the MERN stack.

NovaCart provides a complete online shopping experience with secure authentication, product management, shopping cart, wishlist, orders, reviews, admin controls, and cloud-based image management.

---

## 🌐 Live Demo
https://shopsphere-frontend-0zyu.onrender.com

> Replace the above URLs with the deployed frontend and backend URLs.

---

## ✨ Features

### 👤 Authentication
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Role-Based Access Control
- Admin and User Roles
- Persistent Authentication

### 🛍️ Product Management
- Product Catalog
- Product Details
- Product Search
- Product Filtering
- Category Management
- Product CRUD Operations
- Stock Management
- Discount Pricing
- Featured Products

### 🛒 Shopping Cart
- Add Products to Cart
- Update Product Quantity
- Remove Cart Items
- Clear Cart
- Cart Total Calculation
- Persistent Cart Data

### ❤️ Wishlist
- Add Products to Wishlist
- Remove Products from Wishlist
- Wishlist Management

### 📦 Orders
- Order Creation
- Order Tracking
- Order Management
- Order Status Updates

### ⭐ Reviews
- Product Reviews
- Rating System
- Review Management

### 🏠 Address Management
- Add Address
- Update Address
- Delete Address
- Multiple Address Support

### 🖼️ Image Management
- Cloudinary Image Upload
- Product Image Management

### 🔐 Security
- JWT Authentication
- Password Hashing
- Protected API Routes
- Role-Based Authorization
- Helmet Security Headers
- CORS Configuration
- Request Validation

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- React Router
- Axios
- Context API
- Tailwind CSS
- Framer Motion
- React Hook Form
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Express Validator
- Helmet
- Morgan
- Cookie Parser
- Multer
- Cloudinary

---

## 📁 Project Structure

```text
E-Commerce-WebApp/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── validators/
│   ├── .env.example
│   ├── server.js
│   └── package.json
│
└── README.md
