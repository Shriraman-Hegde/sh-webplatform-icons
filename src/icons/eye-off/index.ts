import { defineIcon } from "../../define.js";
import { EyeOffIcon } from "./eye-off.js";

export class ShIconEyeOff extends EyeOffIcon {}

defineIcon("sh-icon-eye-off", ShIconEyeOff);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-eye-off": ShIconEyeOff;
  }
}
