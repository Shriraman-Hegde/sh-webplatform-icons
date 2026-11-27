import { defineIcon } from "../../define.js";
import { ItalicIcon } from "./italic.js";

export class ShIconItalic extends ItalicIcon {}

defineIcon("sh-icon-italic", ShIconItalic);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-italic": ShIconItalic;
  }
}
