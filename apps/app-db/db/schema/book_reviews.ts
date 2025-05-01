import { integer, pgTable, varchar, text } from "drizzle-orm/pg-core";
import { idColumn, auditColumns } from "./utils";
import { sql } from "drizzle-orm";
import { users } from "./users";

export const bookReviews = pgTable("book_reviews", {
  ...idColumn("br"),
  ...auditColumns(),
  bookId: varchar("book_id", { length: 30 }),
  userId: varchar("user_id", { length: 30 }).references(() => users.id),
  rating: integer("rating").notNull(),
  title: varchar("title", { length: 255 }),
  body: text("body"),
}, (table) => {
  return {
    ratingCheck: sql`check (${table.rating} >= 1 AND ${table.rating} <= 5)`
  };
});
