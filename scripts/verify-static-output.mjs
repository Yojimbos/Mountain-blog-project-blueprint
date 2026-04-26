import fs from "node:fs";
import path from "node:path";

const outputDir = path.join(process.cwd(), "out");
const requiredFiles = [
  "index.html",
  "about/index.html",
  "blog/index.html",
  "routes/index.html",
  "equipment/index.html",
  "safety/index.html",
  "contact/index.html",
  "robots.txt",
  "sitemap.xml",
];

const missingFiles = requiredFiles.filter((file) => !fs.existsSync(path.join(outputDir, file)));

if (missingFiles.length > 0) {
  console.error("Static export is missing required files:");
  for (const file of missingFiles) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

console.log("Static export smoke test passed.");
