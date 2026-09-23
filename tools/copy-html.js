import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const src = path.join(rootDir, "dist", "index.html");

if (!fs.existsSync(src)) {
  console.error(`[copy-html] Source build file not found at: ${src}`);
  process.exit(1);
}

const destinations = [
  // Local repo html folder
  path.join(rootDir, "html", "index.html"),
  // System root /html folder
  path.resolve("/html", "index.html"),
];

for (const dest of destinations) {
  try {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
    const sizeMb = (fs.statSync(dest).size / (1024 * 1024)).toFixed(2);
    console.log(`[copy-html] Successfully copied unified HTML -> ${dest} (${sizeMb} MB)`);
  } catch (err) {
    console.warn(`[copy-html] Could not copy to ${dest}: ${err.message}`);
  }
}
