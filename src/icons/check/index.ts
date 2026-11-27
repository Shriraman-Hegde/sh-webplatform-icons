import { defineIcon } from "../../define.js";
import { CheckIcon } from "./check.js";

export class ShIconCheck extends CheckIcon {}

defineIcon("sh-icon-check", ShIconCheck);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-check": ShIconCheck;
  }
}
