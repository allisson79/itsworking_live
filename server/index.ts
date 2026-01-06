import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import path from "path";

const app = express();
const httpServer = createServer(app);

const isProd = process.env.NODE_ENV === "production";

/**
 * Replit-only assets
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

/**
 * Debug logging (limited)
 */
app.use((req, _res, next) => {
  if (req.path.startsWith("/_") || req.path.startsWith("/__")) {
    console.log(
      `[DEBUG] ${req.method} ${req.path} Accept: ${
        req.get("accept")?.substring(0, 50) || "none"
      }`,
    );
  }
  next();
});

app.get("/_health", (_req, res) => {
  res.status(200).json({ status: "ok" });
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
 * API request logging only
 */
app.use((req, res, next) => {
  if (!req.path.startsWith("/api")) return next();

  const start = Date.now();
  const reqPath = req.path;
  let capturedJsonResponse: Record<string, any> | undefined;

  const originalResJson = res.json.bind(res);
  res.json = function (bodyJson: any) {
    capturedJsonResponse = bodyJson;
    return originalResJson(bodyJson);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    let logLine = `${req.method} ${reqPath} ${res.statusCode} in ${duration}ms`;

    if (capturedJsonResponse) {
      const responseStr = JSON.stringify(capturedJsonResponse);
      logLine += ` :: ${
        responseStr.length > 500
          ? responseStr.substring(0, 500) + "..."
          : responseStr
      }`;
    }

    log(logLine);
  });

  next();
});

(async () => {
  await registerRoutes(httpServer, app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
  });

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
