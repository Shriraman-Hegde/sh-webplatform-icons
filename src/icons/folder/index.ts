import { defineIcon } from "../../define.js";
import { FolderIcon } from "./folder.js";

export class ShIconFolder extends FolderIcon {}

defineIcon("sh-icon-folder", ShIconFolder);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-folder": ShIconFolder;
  }
}
