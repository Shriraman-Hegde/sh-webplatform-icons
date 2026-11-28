import { defineIcon } from "../../define.js";
import { CopyIcon } from "./copy.js";

export class ShIconCopy extends CopyIcon {}

defineIcon("sh-icon-copy", ShIconCopy);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-copy": ShIconCopy;
  }
}
