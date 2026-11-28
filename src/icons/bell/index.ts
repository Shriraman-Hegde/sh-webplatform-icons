import { defineIcon } from "../../define.js";
import { BellIcon } from "./bell.js";

export class ShIconBell extends BellIcon {}

defineIcon("sh-icon-bell", ShIconBell);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-bell": ShIconBell;
  }
}
