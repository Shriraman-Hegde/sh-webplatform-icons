import { defineIcon } from "../../define.js";
import { BoldIcon } from "./bold.js";

export class ShIconBold extends BoldIcon {}

defineIcon("sh-icon-bold", ShIconBold);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-bold": ShIconBold;
  }
}
