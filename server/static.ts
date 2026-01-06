import express, { type Express, type Request, type Response, type NextFunction } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(process.cwd(), "dist", "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const indexPath = path.resolve(distPath, "index.html");

  app.use(express.static(distPath, {
    index: "index.html",
    maxAge: "1d",
  }));

  app.get("/", (_req: Request, res: Response) => {
    res.sendFile(indexPath);
  });

  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.path.startsWith("/api") || 
        req.path.startsWith("/_") || 
        req.path.startsWith("/__")) {
      return next();
    }
    
    res.sendFile(indexPath);
  });
}
