import { defineIcon } from "../../define.js";
import { PhoneIcon } from "./phone.js";

export class ShIconPhone extends PhoneIcon {}

defineIcon("sh-icon-phone", ShIconPhone);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-phone": ShIconPhone;
  }
}
