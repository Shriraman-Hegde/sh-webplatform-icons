import { defineIcon } from "../../define.js";
import { UploadIcon } from "./upload.js";

export class ShIconUpload extends UploadIcon {}

defineIcon("sh-icon-upload", ShIconUpload);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-upload": ShIconUpload;
  }
}
