import { defineIcon } from "../../define.js";
import { ChevronsLeftIcon } from "./chevrons-left.js";

export class ShIconChevronsLeft extends ChevronsLeftIcon {}

defineIcon("sh-icon-chevrons-left", ShIconChevronsLeft);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-chevrons-left": ShIconChevronsLeft;
  }
}
