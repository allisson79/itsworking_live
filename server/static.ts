import express, { type Express, type Request, type Response, type NextFunction } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(process.cwd(), "dist", "public");
  const indexPath = path.resolve(distPath, "index.html");
  const isProd = process.env.NODE_ENV === "production";
  
  let indexExists: boolean | null = null;
  const checkIndexExists = () => {
    if (isProd && indexExists !== null) {
      return indexExists;
    }
    indexExists = fs.existsSync(indexPath);
    return indexExists;
  };

  const sendHtmlWithNoCache = (res: Response) => {
    res.set("Cache-Control", "no-store, must-revalidate");
    res.set("Pragma", "no-cache");
    res.set("Expires", "0");
    res.sendFile(indexPath);
  };
  
  app.get("/", (_req: Request, res: Response) => {
    if (checkIndexExists()) {
      sendHtmlWithNoCache(res);
    } else {
      res.status(200).send("Server is starting...");
    }
  });

  app.use("/assets", express.static(path.join(distPath, "assets"), {
    maxAge: "1y",
    immutable: true,
    etag: true,
    lastModified: true,
  }));

  app.use(express.static(distPath, {
    index: false,
    maxAge: "7d",
    etag: true,
    lastModified: true,
    setHeaders: (res, filePath) => {
      const fileName = path.basename(filePath);
      if (filePath.endsWith(".html")) {
        res.set("Cache-Control", "no-store, must-revalidate");
      } else if (fileName.match(/^[a-zA-Z0-9_-]+\.[a-f0-9]{8,}\.(js|css|mjs)$/i) || 
                 fileName.match(/^[a-zA-Z0-9]{8,}=?\.(js|css|mjs)$/i)) {
        res.set("Cache-Control", "public, max-age=31536000, immutable");
      } else if (filePath.match(/\.(jpg|jpeg|png|gif|svg|webp|ico)$/i)) {
        res.set("Cache-Control", "public, max-age=604800, stale-while-revalidate=86400");
      }
    },
  }));

  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.path.startsWith("/api") || 
        req.path.startsWith("/_") || 
        req.path.startsWith("/__")) {
      return next();
    }
    
    if (checkIndexExists()) {
      sendHtmlWithNoCache(res);
    } else {
      next();
    }
  });
}
