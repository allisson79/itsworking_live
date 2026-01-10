import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

const ALLOWED_HOSTNAMES = ["itsworking.no", "www.itsworking.no", "localhost"];

async function verifyRecaptcha(token: string, expectedAction: string): Promise<{ success: boolean; score: number; reason?: string }> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY not configured");
    return { success: false, score: 0, reason: "config_error" };
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${token}`,
    });
    const data = await response.json();
    
    if (!data.success) {
      console.warn("reCAPTCHA verification failed:", data["error-codes"]);
      return { success: false, score: 0, reason: "verification_failed" };
    }
    
    if (data.action !== expectedAction) {
      console.warn(`reCAPTCHA action mismatch: expected ${expectedAction}, got ${data.action}`);
      return { success: false, score: 0, reason: "action_mismatch" };
    }
    
    const hostname = data.hostname || "";
    const isValidHost = ALLOWED_HOSTNAMES.some(h => hostname === h || hostname.endsWith(`.${h}`) || hostname.endsWith(".replit.dev"));
    if (!isValidHost) {
      console.warn(`reCAPTCHA hostname not allowed: ${hostname}`);
      return { success: false, score: 0, reason: "invalid_hostname" };
    }
    
    return { success: true, score: data.score || 0 };
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return { success: false, score: 0, reason: "network_error" };
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.status.get.path, (_req, res) => {
    res.status(200).json({
      status: "live",
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development",
    });
  });
  
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      
      const recaptchaResult = await verifyRecaptcha(input.recaptchaToken, "contact_form");
      if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
        console.warn(`Contact form rejected: score=${recaptchaResult.score}, reason=${recaptchaResult.reason}`);
        return res.status(400).json({
          message: "Verifisering mislyktes. Vennligst prøv igjen.",
          field: "recaptcha",
        });
      }
      
      const { recaptchaToken, ...messageData } = input;
      const message = await storage.createContactMessage(messageData);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.issues[0].message,
          field: err.issues[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
