import { type Express } from "express";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import fs from "fs";
import path from "path";

const viteLogger = createLogger();

export async function setupVite(server: Server, app: Express) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
    host: "0.0.0.0",
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);

  // Cache the template path to avoid repeated path.resolve calls
  const clientTemplatePath = path.resolve(
    import.meta.dirname,
    "..",
    "client",
    "index.html",
  );

  // Cache template in development with file watcher for invalidation
  let cachedTemplate: string | null = null;
  let templateMtime: number = 0;

  const getTemplate = async (): Promise<string> => {
    try {
      const stats = await fs.promises.stat(clientTemplatePath);
      const currentMtime = stats.mtimeMs;
      
      // Reload template if it changed or not cached
      if (!cachedTemplate || currentMtime !== templateMtime) {
        cachedTemplate = await fs.promises.readFile(clientTemplatePath, "utf-8");
        templateMtime = currentMtime;
      }
      
      return cachedTemplate;
    } catch (error) {
      // Fallback to reading directly if cache fails
      return fs.promises.readFile(clientTemplatePath, "utf-8");
    }
  };

  app.get("*", async (req, res, next) => {
    const url = req.originalUrl;

    // Skip Replit internal endpoints
    const replitPaths = ["/_repl", "/__repl", "/_replpanel", "/_proxy", "/_debug", "/_health", "/_shortlink"];
    if (replitPaths.some(path => url.startsWith(path))) {
      return next();
    }

    try {
      const template = await getTemplate();
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ 
        "Content-Type": "text/html",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0"
      }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}
