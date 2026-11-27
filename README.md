# @sh-webplatform/icons

SVG icon library for sh-webplatform. Architecture follows [Tap30/icons](https://github.com/Tap30/icons): source SVGs → generate Lit `sh-icon-*` components + a named registry for `wk-icon`.

## Usage

```ts
import { iconRegistry, registerAllIcons } from "@sh-webplatform/icons";
import "@sh-webplatform/icons"; // registers sh-icon-* custom elements

registerAllIcons(); // optional: ensure all tags are defined

const svg = iconRegistry.get("check");
```

## Develop

```bash
pnpm install
pnpm build
pnpm storybook
```

Add SVGs under `icons/` (24×24, `currentColor`), then `pnpm build` regenerates components.
