# E-commerce Back End

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-v14.17-green)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.17-blue)](https://expressjs.com/)
[![Sequelize](https://img.shields.io/badge/Sequelize-v6.6-orange)](https://sequelize.org/)

## Description

The E-commerce Back End is a backend application for an e-commerce website built using Express.js and Sequelize. It provides a RESTful API for managing categories, products, and tags in an e-commerce system. The API allows for creating, reading, updating, and deleting data in the MySQL database.

This project was part of the Object-Relational Mapping (ORM) Challenge. The goal was to configure the Express.js API to use Sequelize to interact with the MySQL database and meet the specified acceptance criteria.

## Technologies Used

- JavaScript
- Node.js
- Express.js
- Sequelize
- MySQL

## Changes Made

To complete the challenge, the following changes were made to the provided code:

- Configured the database connection using Sequelize and dotenv.
- Created Sequelize models for Category, Product, Tag, and ProductTag.
- Implemented API routes for categories, products, and tags.
- Seeded the database with test data.
- Synchronized Sequelize models with the MySQL database on server start.

## How the API Works

The API provides the following endpoints:

- `/api/categories`: CRUD operations for categories.
- `/api/products`: CRUD operations for products.
- `/api/tags`: CRUD operations for tags.

To test the API routes, you can use tools like Insomnia or Postman. Send requests to the appropriate endpoints using the specified HTTP methods (GET, POST, PUT, DELETE), request headers, and request bodies as described in the API documentation. Make sure to include the necessary authentication tokens or credentials if required.

For detailed usage examples and demonstrations, refer to the [demo video](#demo) section.

## Demo

Check out the [demo video](https://drive.google.com/file/d/15VeplYYxSXgQ2uj_zudh22d2LTEdPcPb/view) showcasing the functionality of the E-commerce Back End application.

## Questions or Feedback

For any questions or feedback regarding this project, feel free to contact me through [GitHub](https://github.com/renkayla).

