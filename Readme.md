# Node.js Fastify API with Prisma, JWT Authentication, and MySQL

This application is a REST API built with Node.js using the Fastify framework, Prisma ORM, and JWT for authentication. It interacts with a MySQL database. Docker is used to create a MySQL container for the development environment.

## Setup and Running the Project

1. **Docker:** Make sure Docker is installed on your machine. You can download it [here](https://www.docker.com/products/docker-desktop).

2. **Environment Variables:** Copy the `.env.local` file, rename it to `.env`, and fill in the necessary details. 

3. **Start the Database:** Navigate to the root of the project and run `docker-compose up -d` to start the MySQL container.

4. **Prisma:** Run `npx prisma generate` to generate the Prisma client, and `npx prisma migrate dev` to run the database migrations.

5. **Install Dependencies:** Run `npm install` or `yarn` to install all dependencies.

6. **Start the Server:** Run `npm run dev` or `yarn dev` to start the development server.

## Architecture

The application follows a modular design with the separation of concerns principle.

- **Modules:** The application is divided into modules, each containing its controller, routes, service, and repository. Currently, there are two modules: User and Auth.

- **Controller:** The controller handles HTTP requests and responses. It uses services to process data and return the response.

- **Service:** Services contain the main business logic of the application. They use repositories to interact with the database.

- **Repository:** The repository is the data access layer of the application. It uses Prisma to interact with the MySQL database.

- **Routes:** Routes define the API endpoints. They connect HTTP requests to the corresponding controller methods.

## JWT Authentication

The application uses JWT (JSON Web Tokens) for authentication. 

- The `/api/auth/login` endpoint generates a JWT upon successful login.
- This JWT must be included as a Bearer token in the `Authorization` header of requests to protected routes.
- The application uses a Fastify preValidation hook to verify the JWT and authenticate the request.

## Endpoints

- **User Module:** 
  - `GET /api/users`: Get all users. This route is protected, and it requires JWT authentication.
  - `POST /api/users`: Create a new user. This route is also protected.

- **Auth Module:**
  - `POST /api/auth/login`: Login and get a JWT. This route is public.
  - `POST /api/auth/register`: Login and get a JWT. This route is public.

Remember to replace `localhost` with the relevant domain if you're not testing the API locally. Always use HTTPS in production environments.

Remember to run the tests to ensure that your setup is correct, and everything works as expected. Run the tests with `npm test` or `yarn test`.

Happy coding!
