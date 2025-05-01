import { Database } from './types';
import { eq } from 'drizzle-orm';
import { users } from '../schema/users';

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export const UsersRepository = {
  create: async (db: Database, user: NewUser) => {
    return await db
      .insert(users)
      .values(user)
      .returning()
      .then(r => r[0]!);
  },

  getById: async (db: Database, userId: string) => {
    return await db
      .select()
      .from(users)
      .where(eq(users.id, userId))
      .then(r => r[0]);
  },
};
