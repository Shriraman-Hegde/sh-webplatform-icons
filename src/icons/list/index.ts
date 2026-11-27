import { defineIcon } from "../../define.js";
import { ListIcon } from "./list.js";

export class ShIconList extends ListIcon {}

defineIcon("sh-icon-list", ShIconList);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-list": ShIconList;
  }
}
