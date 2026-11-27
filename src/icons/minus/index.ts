import { defineIcon } from "../../define.js";
import { MinusIcon } from "./minus.js";

export class ShIconMinus extends MinusIcon {}

defineIcon("sh-icon-minus", ShIconMinus);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-minus": ShIconMinus;
  }
}
