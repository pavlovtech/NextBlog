import { mysqlTable, serial, text, varchar, int, uniqueIndex, index, bigint, mediumtext, datetime, timestamp, tinytext } from "drizzle-orm/mysql-core";

export const posts = mysqlTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title', ).notNull(),
  description: text('description').notNull(),
  createdAt: datetime('created_at').notNull(),
  updatedAt: datetime('updated_at').notNull(),
  coverImageUrl: varchar('cover_image_url', { length: 300 }),
  authorId: varchar('author_id', { length: 256 }),
  slug: varchar('slug', { length: 256 }),
},
(posts) => ({
    created_at_idx: index('created_at_idx').on(posts.createdAt),
    updated_at_idx: index('updated_at_idx').on(posts.updatedAt),
    author_id_idx: index('author_id_idx').on(posts.authorId),
    slug_idx: uniqueIndex('slug_idx').on(posts.slug),
}));

export const authors = mysqlTable('authors', {
    id: varchar('id', { length: 256 }).primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    avatar_url: varchar('avatar_url', { length: 256 }).notNull()
});