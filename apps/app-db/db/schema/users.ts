import { pgTable, varchar, text, timestamp, boolean } from "drizzle-orm/pg-core";
import { idColumn } from "./utils";

export const users = pgTable("users", {
  id: idColumn("usr"),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  password: varchar("password", { length: 255 }).notNull(),
  avatar: text("avatar"),
  isAdmin: boolean("is_admin").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
