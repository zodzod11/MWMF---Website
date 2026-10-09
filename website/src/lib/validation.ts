import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().max(20).optional().default(""),
  topic: z.enum(["general", "volunteer", "partner", "support", "media", "other"]),
  message: z.string().min(10, "Please include a brief message").max(2000),
  _hp: z.string().max(0, "Bot detected").optional().default(""), // honeypot
});

export const InterestSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().max(20).optional().default(""),
  organization: z.string().max(200).optional().default(""),
  interest: z.enum(["volunteer", "partner", "sponsor", "other"]),
  message: z.string().min(10, "Please tell us a bit about your interest").max(2000),
  _hp: z.string().max(0, "Bot detected").optional().default(""),
});

export type ContactData = z.infer<typeof ContactSchema>;
export type InterestData = z.infer<typeof InterestSchema>;
