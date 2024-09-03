# User Management Project

## Overview

This project is a user management application built with React and Material-UI. It allows for user authentication, viewing user details, adding new users, and managing existing users. The project also incorporates private routing to secure certain parts of the application.

## Features

- **User Authentication**: Users can log in to access the application.
- **Dashboard**: View a list of users with pagination and action options.
- **Add User**: Add new users with a form to input user details.
- **User Details**: View detailed information about a specific user.
- **Responsive Design**: The application is designed to be responsive across various devices.

## Installation

To get started with the project, follow these steps:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/user-management-project.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd user-management-project
    ```

3. **Install Dependencies**

    Ensure you have [Node.js](https://nodejs.org/) installed, then run:

    ```bash
    npm install
    ```

4. **Set Up Environment Variables**

    Create a `.env` file in the root of the project and add the following variables:

    ```plaintext
    REACT_APP_API_URL=https://jsonplaceholder.typicode.com
    ```

5. **Run the Application**

    Start the development server:

    ```bash
    npm start
    ```

    Open your browser and navigate to `http://localhost:3000` to view the application.



## Usage

- **Login**: Access the application through the login page.
- **Dashboard**: After logging in, navigate to the dashboard to view and manage users.
- **Add User**: Use the add user form to create new users.
- **User Details**: View detailed information about individual users.

## API Endpoints

The project uses JSONPlaceholder for mock data. Here are some example endpoints:

- **Fetch Users**: `GET /users`
- **Fetch User by ID**: `GET /users/{id}`
- **Delete User**: `DELETE /users/{id}`

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the [MIT License](LICENSE).
