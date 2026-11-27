import { defineIcon } from "../../define.js";
import { InfoIcon } from "./info.js";

export class ShIconInfo extends InfoIcon {}

defineIcon("sh-icon-info", ShIconInfo);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-info": ShIconInfo;
  }
}
