import { defineIcon } from "../../define.js";
import { CloseIcon } from "./close.js";

export class ShIconClose extends CloseIcon {}

defineIcon("sh-icon-close", ShIconClose);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-close": ShIconClose;
  }
}
