import express, { type Express, type Request, type Response, type NextFunction } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(process.cwd(), "dist", "public");
  
  // Use a middleware to handle health checks and index.html
  app.get("/", (_req: Request, res: Response) => {
    const indexPath = path.resolve(distPath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send("Not Found");
    }
  });

  app.use(express.static(distPath, {
    index: "index.html",
    maxAge: "1d",
  }));

  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.path.startsWith("/api") || 
        req.path.startsWith("/_") || 
        req.path.startsWith("/__")) {
      return next();
    }
    
    const indexPath = path.resolve(distPath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      next();
    }
  });
}
