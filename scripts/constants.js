import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const rootDir = path.resolve(__dirname, "..");
export const inputDir = path.join(rootDir, "icons");
export const configFilePath = path.join(rootDir, "config.json");
export const outputDir = path.join(rootDir, "src", "icons");
