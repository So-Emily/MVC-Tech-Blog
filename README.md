# MVC Tech Blog

## Description

The MVC Tech Blog is a web application that allows users to create, edit, and delete blog posts. Users can also comment on posts. The application follows the Model-View-Controller (MVC) architectural pattern and uses Handlebars.js as the templating engine, Sequelize as the ORM, and Express.js for the server.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/mvc-tech-blog.git
    ```
2. Navigate to the project directory:
    ```sh
    cd mvc-tech-blog
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Set up the database:
    - Create a `.env` file in the root directory and add your database credentials:
        ```
        DB_NAME='your_database_name'
        DB_USER='your_database_user'
        DB_PASSWORD='your_database_password'
        ```
    - Run the schema file to create the database:
        ```sh
        mysql -u your_database_user -p your_database_name < db/schema.sql
        ```
    - Seed the database:
        ```sh
        npm run seed
        ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Features

- User authentication (signup, login, logout)
- Create, edit, and delete blog posts
- Comment on posts
- Responsive design

## Technologies Used

- Node.js
- Express.js
- Handlebars.js
- Sequelize
- MySQL
- bcrypt
- dotenv
- Express-Session
- Connect-Session-Sequelize

## License

This project is licensed under the ISC License. See the [`LICENSE`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FUsers%2Fesori%2FOneDrive%2Fa-coding-workspace%2Fbootcamp-berkeley%2Fchallenges%2FCha.%2012%20\(14\)%20-%20MVC-Tech-Blog%2FMVC-Tech-Blog%2FLICENSE%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2298f22370-51b3-466b-97ba-4ae80a3ccf36%22%5D "c:\Users\esori\OneDrive\a-coding-workspace\bootcamp-berkeley\challenges\Cha. 12 (14) - MVC-Tech-Blog\MVC-Tech-Blog\LICENSE") file for details.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Questions

If you have any questions, feel free to reach out to me at [So-Emily on GitHub](https://github.com/So-Emily).

