import { pgTable, varchar, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { idColumn, auditColumns } from "./utils";

export const users = pgTable("users", {
  ...idColumn("usr"),
  ...auditColumns(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  userName: varchar("username", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }),
});
