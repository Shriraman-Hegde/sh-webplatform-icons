import { defineIcon } from "../../define.js";
import { ChevronLeftIcon } from "./chevron-left.js";

export class ShIconChevronLeft extends ChevronLeftIcon {}

defineIcon("sh-icon-chevron-left", ShIconChevronLeft);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-chevron-left": ShIconChevronLeft;
  }
}
