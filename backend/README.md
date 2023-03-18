# Daye Backend API

This project is a Node.js backend server for managing users and products. The backend is built using Express and Sequelize with TypeScript, and provides a RESTful API for clients to interact with.

## Getting Started

Follow the steps below to set up the project locally:

1. Clone the repository and navigate to the project directory.
2. Run `npm install` to install the necessary dependencies (node^18.15.0).
3. Run `npm run build` to compile the typescript to javascript in the dist folder
4. Run `npm run migrate` to add database tables
5. Rename the `.env.example` file in the root of the project to `.env` to add the following environment variables:

    ```
    JWT_SECRET=4D4B6B0849C7A0C0FFC6D8E1A01CFBD0D16877F989A54A2F0189CB9A62A6F98A
    PORT=3001
    ```
6. Run `npm run start` to add database tables

## API Endpoints

### User Registration

- **URL**: `/user/register`
- **Method**: `POST`
- **Headers**: `{"Content-Type": "application/json"}`
- **Body**: `{ "username": "example", "password": "example-password" }`
- **Description**: Register a new user with the given username and password.

### User Login

- **URL**: `/user/login`
- **Method**: `POST`
- **Headers**: `{"Content-Type": "application/json"}`
- **Body**: `{ "username": "example", "password": "example-password" }`
- **Description**: Log in with an existing user using their username and password. Returns an access token upon successful login.

### Add Product

- **URL**: `/product/add`
- **Method**: `POST`
- **Headers**: `{"Content-Type": "application/json", "Authorization": "Bearer your-access-token"}`
- **Body**: `{
    "price": 24,
    "currency": "USD",
    "image": "https://example.com/product-image.jpg",
    "tampons": [
        {
            "size": "regular",
            "coating": "none",
            "amount": 8
        },
        {
            "size": "regular",
            "coating": "CBD",
            "amount": 4
        }
    ]
}`
- **Description**: Add a new product with associated tampons for the specified user.

### Remove Product

- **URL**: `/product/remove?productId=1`
- **Method**: `GET`
- **Headers**: `{"Authorization": "Bearer your-access-token"}`
- **Description**: Remove a product by its ID and the user ID.

### Get Products

- **URL**: `/product/get?userId=1`
- **Method**: `GET`
- **Headers**: `{"Authorization": "Bearer your-access-token"}`
- **Description**: Retrieve all products for the specified user.

This summary provides a brief overview of each API endpoint, the URL, method, required headers, and body parameters. Replace "your-access-token" with the access token obtained during login.