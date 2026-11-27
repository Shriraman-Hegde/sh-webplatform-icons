import { defineIcon } from "../../define.js";
import { ExternalLinkIcon } from "./external-link.js";

export class ShIconExternalLink extends ExternalLinkIcon {}

defineIcon("sh-icon-external-link", ShIconExternalLink);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-external-link": ShIconExternalLink;
  }
}
