import { authors } from '../schema/authors';
import { eq } from 'drizzle-orm';
import { Database } from './types';

export type Author = typeof authors.$inferSelect;
export type NewAuthor = typeof authors.$inferInsert;

export const AuthorsRepository = {
  create: async (db: Database, author: NewAuthor) => {
    return await db
      .insert(authors)
      .values(author)
      .returning()
      .then(r => r[0]!);
  },

  getById: async (db: Database, authorId: string) => {
    return await db
      .select()
      .from(authors)
      .where(eq(authors.id, authorId))
      .then(r => r[0]);
  },
};
