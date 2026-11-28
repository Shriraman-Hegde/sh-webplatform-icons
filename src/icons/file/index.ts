import { defineIcon } from "../../define.js";
import { FileIcon } from "./file.js";

export class ShIconFile extends FileIcon {}

defineIcon("sh-icon-file", ShIconFile);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-file": ShIconFile;
  }
}
