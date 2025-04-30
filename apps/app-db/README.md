# Database Schema & Migrations

This package contains the database schema and migrations for the book reviews application using DrizzleORM and PostgreSQL.

## Setup

1. Copy `.env.example` to `.env` and update the `DATABASE_URL` with your PostgreSQL connection string:

   ```
   DATABASE_URL=postgres://username:password@host:port/database
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Development

- **Generate migrations**: After modifying the schema, run this to generate migration files:

  ```
  npm run generate
  ```

- **Apply migrations**: To apply pending migrations to the database:

  ```
  npm run migrate
  ```

- **View database with Studio**: Launch Drizzle Studio to view and edit your database:
  ```
  npm run studio
  ```

## Schema

The database schema is defined in the `src/schema` directory:

- `books.ts`: Contains tables for books and reviews
- Add additional schema files as needed

## Usage in other services

To use this package in other services:

```typescript
import { db, books, reviews } from "db";

// Query examples
const allBooks = await db.select().from(books);
const bookWithReviews = await db
  .select()
  .from(books)
  .where(eq(books.id, bookId));
```
