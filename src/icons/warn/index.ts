import { defineIcon } from "../../define.js";
import { WarnIcon } from "./warn.js";

export class ShIconWarn extends WarnIcon {}

defineIcon("sh-icon-warn", ShIconWarn);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-warn": ShIconWarn;
  }
}
