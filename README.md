# E-Commerce System

## Table of contents

- [About](#about)
  - [Links](#links)
  - [Overview](#overview)
  - [Features](#features)
  - [Built with](#built-with)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## About

### Links

Frontend Live Site: https://ecommerce-tawny-eight-10.vercel.app/ <br />
Backend API: https://ecommerce-vhgs.onrender.com

### Overview

This project is a full-stack MERN E-Commerce application built using React, Node.js, Express, and MongoDB. It provides a complete online shopping experience with authentication, product browsing, filtering, sorting, searching, cart management, and order handling.

The backend is developed using Node.js and Express with MongoDB for persistent data storage. The frontend is built using React with Tailwind CSS for responsive UI design. The application follows a modular architecture with separate routes, controllers, middleware, and models for scalability and maintainability.

### Features

**Authentication & Authorization** <br />

- User registration and login
- Password hashing using bcryptjs
- JWT-based authentication
- Role-based access control using middleware
- Protected routes for authenticated users
- Separate admin and user access permissions

**Product Management** <br />

- View all products
- Product detail page
- Add, Edit and Delete products (admin only)
- Product filtering by category
- Product sorting by price
- Product search functionality
- Recommendation system endpoint for related products

**Cart & Order Features** <br />

- Add products to cart
- Delete products from cart
- Persistent cart using local storage
- User-specific cart handling

**Backend & Database** <br />

- MongoDB Atlas used for persistent cloud database storage
- Mongoose schemas and models for structured data
- RESTful API architecture
- Modular backend folder structure
- Separate controllers, routes, middleware, and models

**Validation & Security** <br />

- Backend validation for required fields
- Error handling middleware
- Protected API routes using JWT verification
- Token-based authentication flow
- Secure password encryption with bcryptjs

**Frontend UI** <br />

- Responsive design using Tailwind CSS
- Mobile-friendly layout
- Product cards and product detail pages
- Dynamic filtering and sorting UI
- React Router navigation
- Axios integration for API communication

**API Integration** <br />

- Frontend connected to backend APIs using Axios
- Authentication flow integrated with backend
- Product data fetched from backend APIs
- Order APIs integrated with frontend actions
- API testing performed using Postman

**Deployment & Version Control** <br />

- Frontend deployed on Vercel
- Backend deployed on Render
- MongoDB Atlas cloud database integration
- Git and GitHub used for version control and deployment workflow

### Built With

#### Frontend

- React.js
- React Router
- Tailwind CSS
- Axios

#### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- cors

#### Tools

- Git & GitHub
- Postman
- Vercel
- Render
- MongoDB Atlas

## Admin Access

Demo admin credentials for testing admin-only features:

- Email: admin@gmail.com
- Password: password

## Author

- LinkedIn - [Sruthi V Nair](https://www.linkedin.com/in/sruthi-v-nair-5b5a09191/)
- Github - [Sruthi V Nair](https://github.com/sruthi-nair166)

## Acknowledgments

This project was built as part of an assignment in the Full Stack Development course I'm currently enrolled in, offered by Entri Elevate. Special thanks to the course instructors and materials for the guidance and support.
