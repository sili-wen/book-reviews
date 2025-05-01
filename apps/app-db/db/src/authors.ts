import { db } from '..';
import { authors } from '../schema/authors';

export type Author = typeof authors.$inferSelect;

export const AuthorsRepository = {
  create: async (author: Author) => {
    const [newAuthor] = await db.insert(authors).values(author).returning();
    return newAuthor;
  },
};
