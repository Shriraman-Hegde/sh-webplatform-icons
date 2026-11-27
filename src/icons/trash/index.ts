import { defineIcon } from "../../define.js";
import { TrashIcon } from "./trash.js";

export class ShIconTrash extends TrashIcon {}

defineIcon("sh-icon-trash", ShIconTrash);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-trash": ShIconTrash;
  }
}
