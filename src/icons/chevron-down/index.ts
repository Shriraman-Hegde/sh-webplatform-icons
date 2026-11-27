import { defineIcon } from "../../define.js";
import { ChevronDownIcon } from "./chevron-down.js";

export class ShIconChevronDown extends ChevronDownIcon {}

defineIcon("sh-icon-chevron-down", ShIconChevronDown);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-chevron-down": ShIconChevronDown;
  }
}
