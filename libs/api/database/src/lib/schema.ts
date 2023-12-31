import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import {
  boolean,
  bigserial,
  integer,
  pgTable,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const user = pgTable('app_user', {
  userId: bigserial('user_id', { mode: 'number' }).primaryKey().notNull(),
  name: varchar('name', { length: 64 }).notNull(),
  email: varchar('email', { length: 64 }).notNull().unique(),
  password: varchar('password', { length: 64 }).notNull(),
  address: varchar('address', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 64 }).notNull(),
  taxId: varchar('tax_id', { length: 255 }).notNull().unique(),
  isAdmin: boolean('is_admin').default(false),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type SelectUser = InferSelectModel<typeof user>;
export type InsertUser = InferInsertModel<typeof user>;

export const category = pgTable('category', {
  categoryId: bigserial('category_id', { mode: 'number' })
    .primaryKey()
    .notNull(),
  name: varchar('name', { length: 64 }).notNull().unique(),
  createdAt: timestamp('assigned_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type SelectCategory = InferSelectModel<typeof category>;
export type InsertCategory = InferInsertModel<typeof category>;

export const product = pgTable('product', {
  productId: bigserial('product_id', { mode: 'number' }).primaryKey().notNull(),
  userId: integer('user_id')
    .references(() => user.userId)
    .notNull(),
  categoryId: integer('category_id')
    .references(() => category.categoryId)
    .notNull(),
  name: varchar('name', { length: 64 }).notNull(),
  image: varchar('image', { length: 255 }).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type SelectProduct = InferSelectModel<typeof category>;
export type InsertProduct = InferInsertModel<typeof category>;

export const record = pgTable('record', {
  recordId: bigserial('record_id', { mode: 'number' }).primaryKey().notNull(),
  productId: integer('product_id')
    .references(() => product.productId)
    .notNull(),
  trackNumber: varchar('track_number', { length: 255 }).notNull().unique(),
  unitOfMeasure: varchar('unit_of_measure', { length: 64 }).notNull(),
  unitPrice: integer('unit_price').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});
