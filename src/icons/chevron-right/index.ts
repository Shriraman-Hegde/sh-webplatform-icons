import { defineIcon } from "../../define.js";
import { ChevronRightIcon } from "./chevron-right.js";

export class ShIconChevronRight extends ChevronRightIcon {}

defineIcon("sh-icon-chevron-right", ShIconChevronRight);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-chevron-right": ShIconChevronRight;
  }
}
