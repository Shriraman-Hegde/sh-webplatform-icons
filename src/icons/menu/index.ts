import { defineIcon } from "../../define.js";
import { MenuIcon } from "./menu.js";

export class ShIconMenu extends MenuIcon {}

defineIcon("sh-icon-menu", ShIconMenu);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-menu": ShIconMenu;
  }
}
