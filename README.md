# Project: Livestream Room Management Backend

A Node.js backend project for managing questions in livestream rooms. Built with [Fastify](https://www.fastify.io/) and [TypeScript](https://www.typescriptlang.org/).

## Features

- Create and manage livestream rooms
- Submit and moderate questions in real-time
- RESTful API endpoints for room and question management

## Tech Stack

- Node.js
- Fastify
- TypeScript
- Zod for validation
- PostgreSQL for database management
- Drizzle ORM for database interactions
- Docker for containerization

## Getting Started

1. **Install dependencies:**

   ```
   npm install
   ```

2. **Run the development server:**

   ```
   npm run dev
   ```

3. **Run migrations:**

   Ensure you have PostgreSQL running and configured. Then run:

   ```
   npx drizzle-kit migrate
   ```

4. **Seed the database:**

   ```
   npm run db:seed
   ```

## API Endpoints

- `GET /health` — Health check _(done)_
- `GET /rooms` — List all rooms _(done)_
- `POST /rooms` — Create a new room _(in progress)_
- `GET /rooms/:id/questions` — List questions for a room _(in progress)_
- `POST /rooms/:id/questions` — Submit a question to a room _(in progress)_

## Project Structure
