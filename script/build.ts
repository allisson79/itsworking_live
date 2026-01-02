import * as esbuild from "esbuild";
import { rm } from "fs/promises";

async function build() {
  await rm("dist", { recursive: true, force: true });

  await esbuild.build({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "esm",
    outfile: "dist/index.mjs",
    target: "node20",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    sourcemap: false,
  });

  console.log("✅ Server build complete: dist/index.mjs");
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
