import { pgTable, varchar, text, timestamp, boolean, integer, date, pgEnum } from "drizzle-orm/pg-core";
import { idColumn, auditColumns } from "./utils";
import { authors } from "./authors";

// Define categories enum
export const bookCategoryEnum = pgEnum('book_category', [
  'fiction',
  'non_fiction',
  'sci_fi',
  'fantasy',
  'mystery',
  'thriller',
  'romance',
  'biography',
  'history',
  'self_help',
  'business',
  'technology',
  'cooking',
  'travel',
  'children'
]);

export const books = pgTable("books", {
  ...idColumn("bk"),
  ...auditColumns(),
  authorId: varchar("author_id", { length: 30 }).references(() => authors.id),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  publishedAt: date("published_at"),
  language: varchar("language", { length: 2 }).notNull(),
  pageCount: integer("page_count"),
  categories: bookCategoryEnum('categories').array(),
});
