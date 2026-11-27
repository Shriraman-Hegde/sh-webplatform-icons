import { defineIcon } from "../../define.js";
import { HomeIcon } from "./home.js";

export class ShIconHome extends HomeIcon {}

defineIcon("sh-icon-home", ShIconHome);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-home": ShIconHome;
  }
}
