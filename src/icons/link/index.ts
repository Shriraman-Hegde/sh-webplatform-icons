import { defineIcon } from "../../define.js";
import { LinkIcon } from "./link.js";

export class ShIconLink extends LinkIcon {}

defineIcon("sh-icon-link", ShIconLink);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-link": ShIconLink;
  }
}
