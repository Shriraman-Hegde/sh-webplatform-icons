import { defineIcon } from "../../define.js";
import { ErrorIcon } from "./error.js";

export class ShIconError extends ErrorIcon {}

defineIcon("sh-icon-error", ShIconError);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-error": ShIconError;
  }
}
