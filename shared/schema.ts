import { pgTable, text, serial, integer, boolean, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export enum UserRole {
  Entrepreneur = "entrepreneur",
  APIP = "apip",
  SupportOrg = "support_org",
  Donor = "donor"
}

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  role: text("role", { enum: Object.values(UserRole) }).notNull(),
  language: text("language").notNull().default("fr"),
  email: text("email").notNull(),
  name: text("name").notNull(),
});

export const entrepreneurs = pgTable("entrepreneurs", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  businessName: text("business_name").notNull(),
  description: text("description"),
  sector: text("sector").notNull(),
  location: text("location").notNull(),
  registrationStatus: text("registration_status").notNull(),
});

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  entrepreneurId: integer("entrepreneur_id").references(() => entrepreneurs.id),
  name: text("name").notNull(),
  description: text("description"),
  status: text("status").notNull(),
  startDate: timestamp("start_date").notNull(),
  targetDate: timestamp("target_date"),
  metrics: jsonb("metrics"),
});

export const activities = pgTable("activities", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id").references(() => projects.id),
  type: text("type").notNull(),
  description: text("description").notNull(),
  timestamp: timestamp("timestamp").notNull(),
  data: jsonb("data"),
});

export const surveys = pgTable("surveys", {
  id: serial("id").primaryKey(),
  creatorId: integer("creator_id").references(() => users.id),
  title: text("title").notNull(),
  description: text("description"),
  questions: jsonb("questions").notNull(),
  isActive: boolean("is_active").notNull().default(true),
});

export const surveyResponses = pgTable("survey_responses", {
  id: serial("id").primaryKey(),
  surveyId: integer("survey_id").references(() => surveys.id),
  entrepreneurId: integer("entrepreneur_id").references(() => entrepreneurs.id),
  responses: jsonb("responses").notNull(),
  submittedAt: timestamp("submitted_at").notNull(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  role: true,
  email: true,
  name: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Entrepreneur = typeof entrepreneurs.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type Activity = typeof activities.$inferSelect;
export type Survey = typeof surveys.$inferSelect;
export type SurveyResponse = typeof surveyResponses.$inferSelect;
