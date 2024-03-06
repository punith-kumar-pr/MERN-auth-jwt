# MERN Stack JWT Authentication App

This is a simple web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack for handling user authentication using JSON Web Tokens (JWT).

## Features

- **User registration:** Allows users to create a new account with a unique username and password.
- **User login:** Enables users to log in to their account securely.
- **JWT Authentication:** Uses JSON Web Tokens to authenticate users and authorize access to protected routes.
- **Protected routes:** Certain routes in the application are protected and can only be accessed by authenticated users.
- **Token expiration:** JWT tokens have a limited lifespan to ensure security.

## Technologies Used

- **MongoDB**: NoSQL database used to store user data.
- **Express.js**: Backend framework used to build the RESTful API.
- **React.js**: Frontend library used to create the user interface.
- **Node.js**: JavaScript runtime environment used for server-side logic.
- **JWT (JSON Web Tokens)**: Used for secure authentication.
- **bcrypt.js**: Library used for hashing passwords.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/punith-kumar-pr/MERN-auth-jwt.git
   ``` 

2. Navigate to the project directory:

    ```bash
    cd MERN-jwt-auth
    ```
   
3. Install dependencies for both the server and client:

   ```bash
   cd server && npm install
   cd ../client && npm install
   ```

4. Set up environment variables and other variables:

    ```bash
    PORT=3001
    DB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

5. Start the server:
    ```bash
   cd ../server && npm start
    ```

6. Start the client:
    ```bash
   cd ../client && npm run start
    ```

7. Open your browser and navigate to http://localhost:3000 to access the application.

***
------

**Don't forget to give a star if you like**

**Thank you**


