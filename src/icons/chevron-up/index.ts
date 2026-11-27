import { defineIcon } from "../../define.js";
import { ChevronUpIcon } from "./chevron-up.js";

export class ShIconChevronUp extends ChevronUpIcon {}

defineIcon("sh-icon-chevron-up", ShIconChevronUp);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-chevron-up": ShIconChevronUp;
  }
}
