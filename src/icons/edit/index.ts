import { defineIcon } from "../../define.js";
import { EditIcon } from "./edit.js";

export class ShIconEdit extends EditIcon {}

defineIcon("sh-icon-edit", ShIconEdit);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-edit": ShIconEdit;
  }
}
