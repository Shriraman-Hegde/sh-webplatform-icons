import { defineIcon } from "../../define.js";
import { UnderlineIcon } from "./underline.js";

export class ShIconUnderline extends UnderlineIcon {}

defineIcon("sh-icon-underline", ShIconUnderline);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-underline": ShIconUnderline;
  }
}
