import { defineIcon } from "../../define.js";
import { ChevronsRightIcon } from "./chevrons-right.js";

export class ShIconChevronsRight extends ChevronsRightIcon {}

defineIcon("sh-icon-chevrons-right", ShIconChevronsRight);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-chevrons-right": ShIconChevronsRight;
  }
}
