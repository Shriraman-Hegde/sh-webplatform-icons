import { html, type TemplateResult } from "lit";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import {
  generatedIconNames,
  generatedSvgMap,
  type GeneratedIconName,
} from "./icons/registry.generated.js";
import "./icons/index.js";

export type IconName = GeneratedIconName | (string & {});

export type IconLibrary = {
  get(name: string): TemplateResult | string | undefined;
  names: readonly string[];
};

/** Named registry for webkit `bootstrapWebkit({ icons })` / `wk-icon`. */
export const iconRegistry: IconLibrary = {
  names: generatedIconNames,
  get(name: string) {
    const svg = generatedSvgMap[name];
    return svg ? html`${unsafeSVG(svg)}` : undefined;
  },
};

/** Import side-effect: define all `sh-icon-*` custom elements. */
export function registerAllIcons(): void {
  void generatedSvgMap;
}

export function getIconSvg(name: string): string | undefined {
  return generatedSvgMap[name];
}

export { generatedIconNames, generatedSvgMap, type GeneratedIconName };

export function renderIcon(name: string, size = 24): TemplateResult | null {
  const svg = generatedSvgMap[name];
  if (!svg) return null;
  return html`<span
    style="display:inline-flex;width:${size}px;height:${size}px;color:inherit"
    >${unsafeSVG(svg)}</span
  >`;
}
