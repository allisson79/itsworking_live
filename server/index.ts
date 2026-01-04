import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import path from "path";

const app = express();
const httpServer = createServer(app);

const isProd = process.env.NODE_ENV === "production";

/**
 * Viktig:
 * - Assets fra attached_assets brukes kun av Replit
 * - Må aldri kollidere med Vite /dist/assets
 */
app.use(
  "/attached_assets",
  express.static(path.resolve(process.cwd(), "attached_assets")),
);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      (req as any).rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

// Debug middleware to log ALL requests (temporary for debugging)
app.use((req, res, next) => {
  if (req.path.startsWith("/_") || req.path.startsWith("/__")) {
    console.log(`[DEBUG] ${req.method} ${req.path} Accept: ${req.get("accept")?.substring(0, 50) || "none"}`);
  }
  next();
});

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

/**
 * Request-logging (kun API)
 */
app.use((req, res, next) => {
  const start = Date.now();
  const reqPath = req.path;
  let capturedJsonResponse: Record<string, any> | undefined;

  const originalResJson = res.json.bind(res);
  res.json = function(bodyJson: any) {
    capturedJsonResponse = bodyJson;
    return originalResJson(bodyJson);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (reqPath.startsWith("/api")) {
      let logLine = `${req.method} ${reqPath} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      log(logLine);
    }
  });

  next();
});

(async () => {
  await registerRoutes(httpServer, app);

  /**
   * API error handler
   */
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

  /**
   * 🚨 HER VAR FEILEN TIDLIGERE 🚨
   * Nå er dev og prod 100 % gjensidig utelukkende
   */
  if (isProd) {
    log("Starting in PRODUCTION mode");
    serveStatic(app);
  } else {
    log("Starting in DEVELOPMENT mode (Vite)");
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  const port = parseInt(process.env.PORT || "5000", 10);

  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
    },
    () => {
      log(`serving on port ${port}`);
    },
  );

  httpServer.on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.error(`Port ${port} already in use. Exiting cleanly.`);
      process.exit(0);
    }
    throw err;
  });
})();
