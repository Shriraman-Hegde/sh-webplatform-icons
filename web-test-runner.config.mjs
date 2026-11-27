import { esbuildPlugin } from "@web/dev-server-esbuild";
import { playwrightLauncher } from "@web/test-runner-playwright";

export default {
  files: ["src/**/*.test.ts"],
  nodeResolve: true,
  browsers: [playwrightLauncher({ product: "chromium" })],
  plugins: [esbuildPlugin({ ts: true, target: "es2022" })],
};
