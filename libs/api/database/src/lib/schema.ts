import {
  bigserial,
  pgEnum,
  pgTable,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const user = pgTable('users', {
  userId: bigserial('user_id', { mode: 'number' }).primaryKey().notNull(),
  name: varchar('name', { length: 45 }).notNull().unique(),
  email: varchar('email', { length: 45 }).notNull().unique(),
  avatar: varchar('avatar', { length: 255 }),
  password: varchar('password', { length: 45 }),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});
