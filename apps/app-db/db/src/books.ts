import { Database } from './types';
import { eq } from 'drizzle-orm';
import { books } from '../schema/books';

export type Book = typeof books.$inferSelect;
export type NewBook = typeof books.$inferInsert;

export const BooksRepository = {
  create: async (db: Database, book: NewBook) => {
    return db
      .insert(books)
      .values(book)
      .returning()
      .then(r => r[0]!);
  },

  getById: async (db: Database, bookId: string) => {
    return db
      .select()
      .from(books)
      .where(eq(books.id, bookId))
      .then(r => r[0]);
  },
};
