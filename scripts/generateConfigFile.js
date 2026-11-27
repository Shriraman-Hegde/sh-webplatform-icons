import fs from "node:fs";
import path from "node:path";
import { configFilePath, inputDir } from "./constants.js";
import { adjustSvgIndent } from "./common.js";

if (!fs.existsSync(inputDir)) {
  console.error(`Missing icons directory: ${inputDir}`);
  process.exit(1);
}

const files = fs.readdirSync(inputDir).filter((f) => f.endsWith(".svg"));
const config = {};

for (const file of files) {
  const id = path.basename(file, ".svg");
  const svgContent = fs.readFileSync(path.join(inputDir, file), "utf8");
  config[id] = {
    id,
    svgContent: adjustSvgIndent(svgContent.replace(/\n/g, "\n")),
  };
}

fs.writeFileSync(configFilePath, JSON.stringify(config, null, 2));
console.info(`Wrote ${Object.keys(config).length} icons → config.json`);
