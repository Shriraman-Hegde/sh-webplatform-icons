import { defineIcon } from "../../define.js";
import { DownloadIcon } from "./download.js";

export class ShIconDownload extends DownloadIcon {}

defineIcon("sh-icon-download", ShIconDownload);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-download": ShIconDownload;
  }
}
