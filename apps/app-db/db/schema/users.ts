import { pgTable, varchar, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { idColumn, auditColumns } from "./utils";

export const users = pgTable("users", {
  ...idColumn("usr"),
  ...auditColumns(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  first_name: varchar("first_name", { length: 255 }).notNull(),
  last_name: varchar("last_name", { length: 255 }).notNull(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }),
});
