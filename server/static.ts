import express, { type Express, type Request, type Response, type NextFunction } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(process.cwd(), "dist", "public");
  const indexPath = path.resolve(distPath, "index.html");
  const isProd = process.env.NODE_ENV === "production";
  
  // Cache file existence check in production only
  let indexExists: boolean | null = null;
  const checkIndexExists = () => {
    if (isProd && indexExists !== null) {
      return indexExists;
    }
    indexExists = fs.existsSync(indexPath);
    return indexExists;
  };
  
  // Explicitly handle root for health checks
  app.get("/", (_req: Request, res: Response) => {
    if (checkIndexExists()) {
      res.sendFile(indexPath);
    } else {
      // In production, index.html should exist. If not, it's a build issue.
      // We return 200 with a message if it's a health check probe during early boot
      res.status(200).send("Server is starting...");
    }
  });

  app.use(express.static(distPath, {
    index: "index.html",
    maxAge: "1d",
  }));

  app.use((req: Request, res: Response, next: NextFunction) => {
    // API and internal routes already handled
    if (req.path.startsWith("/api") || 
        req.path.startsWith("/_") || 
        req.path.startsWith("/__")) {
      return next();
    }
    
    if (checkIndexExists()) {
      res.sendFile(indexPath);
    } else {
      next();
    }
  });
}
