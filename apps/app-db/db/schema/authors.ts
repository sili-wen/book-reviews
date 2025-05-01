import { pgTable, varchar, text, timestamp, boolean, integer, date, pgEnum } from "drizzle-orm/pg-core";
import { idColumn, auditColumns } from "./utils";

export const nationalityEnum = pgEnum('nationality', [
  'us',
  'gb',
  'ca',
  'au',
  'fr',
  'de',
  'jp',
  'cn',
  'in',
  'br',
  'ru',
  'mx',
  'es',
  'it',
  'za',
  'ng',
  'eg',
  'ar',
  'se',
  'no',
  'dk',
  'fi',
  'nl',
  'be',
  'ch',
  'at',
  'ie',
  'nz',
  'sg',
  'kr'
]);

export const authors = pgTable("authors", {
  ...idColumn("aut"),
  ...auditColumns(),
  firstName: varchar("first_name", { length: 255 }).notNull(),
  lastName: varchar("last_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  birthDate: date("birth_date"),
  nationality: nationalityEnum("nationality"),
})