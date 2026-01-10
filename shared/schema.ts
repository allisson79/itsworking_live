import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).extend({
  name: z.string().min(2, "Navn må være minst 2 tegn"),
  email: z.string().email("Ugyldig e-postadresse"),
  message: z.string().min(10, "Meldingen må være minst 10 tegn"),
}).omit({
  id: true,
  createdAt: true,
});

export const contactFormSubmissionSchema = insertContactMessageSchema.extend({
  recaptchaToken: z.string().min(1, "reCAPTCHA-verifisering kreves"),
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactFormSubmission = z.infer<typeof contactFormSubmissionSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
