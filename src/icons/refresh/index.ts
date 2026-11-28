import { defineIcon } from "../../define.js";
import { RefreshIcon } from "./refresh.js";

export class ShIconRefresh extends RefreshIcon {}

defineIcon("sh-icon-refresh", ShIconRefresh);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-refresh": ShIconRefresh;
  }
}
