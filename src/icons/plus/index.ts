import { defineIcon } from "../../define.js";
import { PlusIcon } from "./plus.js";

export class ShIconPlus extends PlusIcon {}

defineIcon("sh-icon-plus", ShIconPlus);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-plus": ShIconPlus;
  }
}
