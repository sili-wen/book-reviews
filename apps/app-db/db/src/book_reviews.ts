import { Database } from './types';
import { eq } from 'drizzle-orm';
import { bookReviews } from '../schema/book_reviews';

export type BookReview = typeof bookReviews.$inferSelect;
export type NewBookReview = typeof bookReviews.$inferInsert;

export const BookReviewsRepository = {
  create: async (db: Database, bookReview: NewBookReview) => {
    return await db
      .insert(bookReviews)
      .values(bookReview)
      .returning()
      .then(r => r[0]!);
  },

  getById: async (db: Database, bookReviewId: string) => {
    return await db
      .select()
      .from(bookReviews)
      .where(eq(bookReviews.id, bookReviewId))
      .then(r => r[0]);
  },
};
