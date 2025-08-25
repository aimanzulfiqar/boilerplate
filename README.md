# Backend Boilerplate

A modern TypeScript backend boilerplate with Express, MongoDB, TypeORM, and best practices for code quality and security.

## Features

- **TypeScript** - Strongly typed JavaScript
- **Express** - Fast, unopinionated, minimalist web framework for Node.js
- **MongoDB** - NoSQL database
- **TypeORM** - ORM for TypeScript and JavaScript
- **Code Quality** - ESLint, Prettier, and Husky for code quality and consistency
- **Security** - Helmet, CORS, and rate limiting
- **Error Handling** - Global error handling middleware
- **Environment Variables** - Dotenv for environment variables with validation

## Project Structure

```
├── src/
│   ├── controllers/     # Request handlers
│   ├── db/              # Database configuration
│   ├── entities/        # TypeORM entities
│   ├── middleware/      # Express middleware
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── utils/           # Utility functions
│   └── index.ts         # Application entry point
├── .env                 # Environment variables
├── .env.example         # Example environment variables
├── .eslintrc.json      # ESLint configuration
├── .prettierrc         # Prettier configuration
└── tsconfig.json       # TypeScript configuration
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB

## Getting Started

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/backend-boilerplate.git
cd backend-boilerplate
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.example .env
```

Edit the `.env` file with your MongoDB connection details and other configuration.

### Development

Start the development server with hot reloading:

```bash
npm run dev
```

### Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## API Endpoints

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID

## Code Quality

This project uses ESLint, Prettier, and Husky to ensure code quality and consistency.

- **ESLint** - Lints your code for potential errors
- **Prettier** - Formats your code consistently
- **Husky** - Runs linting and formatting before commits

## License

ISC