import { defineIcon } from "../../define.js";
import { SettingsIcon } from "./settings.js";

export class ShIconSettings extends SettingsIcon {}

defineIcon("sh-icon-settings", ShIconSettings);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-settings": ShIconSettings;
  }
}
