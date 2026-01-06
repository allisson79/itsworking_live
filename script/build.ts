import { execSync } from "child_process";
import fs from "fs";
import path from "path";

function copyDir(src: string, dest: string) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function build() {
  const root = process.cwd();
  const dist = path.join(root, "dist");

  fs.rmSync(dist, { recursive: true, force: true });
  fs.mkdirSync(dist, { recursive: true });

  console.log("Building client...");
  execSync("npx vite build", { stdio: "inherit" });
  console.log("✅ Client build complete: dist/public");

  console.log("Copying server...");
  copyDir(path.join(root, "server"), path.join(dist, "server"));

  console.log("✅ Server copied (no bundling)");
}

build();
