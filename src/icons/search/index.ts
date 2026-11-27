import { defineIcon } from "../../define.js";
import { SearchIcon } from "./search.js";

export class ShIconSearch extends SearchIcon {}

defineIcon("sh-icon-search", ShIconSearch);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-search": ShIconSearch;
  }
}
