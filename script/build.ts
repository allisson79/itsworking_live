import * as esbuild from "esbuild";
import { rm } from "fs/promises";
import { execSync } from "child_process";

async function build() {
  await rm("dist", { recursive: true, force: true });

  console.log("Building client...");
  execSync("npx vite build", { stdio: "inherit" });
  console.log("✅ Client build complete: dist/public");

  console.log("Building server...");
  await esbuild.build({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    target: "node20",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    sourcemap: false,
  });

  console.log("✅ Server build complete: dist/index.cjs");
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
