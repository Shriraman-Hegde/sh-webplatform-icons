import fs from "node:fs";
import path from "node:path";
import { configFilePath, outputDir } from "./constants.js";
import { adjustSvgIndent, toPascalCase } from "./common.js";

const config = JSON.parse(fs.readFileSync(configFilePath, "utf8"));
const names = Object.keys(config).sort();

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const rootExports = [];
const svgEntries = [];
const storyTags = [];

for (const name of names) {
  const pascal = toPascalCase(name);
  const folder = path.join(outputDir, name);
  fs.mkdirSync(folder, { recursive: true });

  const rawSvg = config[name].svgContent.trim().replace(/\s*\n\s*/g, "");
  const svg = adjustSvgIndent(config[name].svgContent, 8);

  fs.writeFileSync(
    path.join(folder, `${name}.ts`),
    `import { html } from "lit";
import { ShIcon } from "../../icon/index.js";

export class ${pascal}Icon extends ShIcon {
  protected renderGlyph() {
    return html\`
${svg}
    \`;
  }
}
`,
  );

  fs.writeFileSync(
    path.join(folder, "index.ts"),
    `import { defineIcon } from "../../define.js";
import { ${pascal}Icon } from "./${name}.js";

export class ShIcon${pascal} extends ${pascal}Icon {}

defineIcon("sh-icon-${name}", ShIcon${pascal});

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-${name}": ShIcon${pascal};
  }
}
`,
  );

  rootExports.push(`export { ShIcon${pascal} } from "./${name}/index.js";`);
  svgEntries.push(`  "${name}": ${JSON.stringify(rawSvg)},`);
  storyTags.push(
    `    <sh-icon-${name} .size=\${args.size} color=\${args.color}></sh-icon-${name}>`,
  );
}

fs.writeFileSync(
  path.join(outputDir, "index.ts"),
  `${rootExports.join("\n")}\n`,
);

fs.writeFileSync(
  path.join(outputDir, "registry.generated.ts"),
  `export const generatedIconNames = ${JSON.stringify(names, null, 2)} as const;

export type GeneratedIconName = (typeof generatedIconNames)[number];

/** Raw SVG markup keyed by icon name (for unsafeSVG / wk-icon). */
export const generatedSvgMap: Record<string, string> = {
${svgEntries.join("\n")}
};
`,
);

fs.writeFileSync(
  path.join(outputDir, "icons.stories.ts"),
  `import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./index.js";

const meta: Meta = {
  title: "Icons/Set",
  argTypes: {
    size: { control: { type: "number", min: 12, max: 48, step: 2 } },
    color: { control: "color" },
  },
  args: {
    size: 24,
    color: "#132238",
  },
  render: (args) => html\`
    <div style="display:flex;flex-wrap:wrap;gap:1rem;padding:1.5rem;align-items:center">
${storyTags.join("\n")}
    </div>
  \`,
};

export default meta;
type Story = StoryObj;
export const All: Story = {};
`,
);

console.info(`Generated ${names.length} icon components in src/icons/`);
