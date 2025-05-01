import { varchar, timestamp } from "drizzle-orm/pg-core";
import { ulid } from "ulid";

export const idColumn = (tableAbbreviation: string) => {
  return {
    id: varchar("id", { length: 30 })
    .primaryKey()
    .notNull()
    .$defaultFn(() => `${tableAbbreviation}_${ulid()}`)};
};

export const auditColumns = () => {
  return {
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
    createdBy: varchar("created_by", { length: 64 }).notNull().$defaultFn(() => process.env.USER || 'unknown'),
    updatedBy: varchar("updated_by", { length: 64 }).notNull().$defaultFn(() => process.env.USER || 'unknown'),
    terminatedAt: timestamp("terminated_at")
  }
}