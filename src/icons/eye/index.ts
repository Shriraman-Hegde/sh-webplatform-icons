import { defineIcon } from "../../define.js";
import { EyeIcon } from "./eye.js";

export class ShIconEye extends EyeIcon {}

defineIcon("sh-icon-eye", ShIconEye);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-eye": ShIconEye;
  }
}
