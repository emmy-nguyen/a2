import {
  text,
  pgEnum,
  pgTable,
  serial,
  index,
  varchar,
  integer,
} from "drizzle-orm/pg-core";
import { categories } from "./categories";

const moodEnum = pgEnum("mood", ["super", "happy", "meh", "sad", "angry"]);
export { moodEnum };

export const moods = pgTable(
  "moods",
  {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    date: text("date").notNull(),
    time: text("time").notNull(),
    mood: moodEnum("mood"),
    categoryId: integer("category_id").references(() => categories.id),
    notes: text("notes"),
  },
  (table) => {
    return {
      userIdIndex: index("user_id_idx").on(table.userId),
    };
  }
);

type Mood = typeof moods.$inferSelect;
type NewMood = typeof moods.$inferInsert;