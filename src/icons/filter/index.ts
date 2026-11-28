import { defineIcon } from "../../define.js";
import { FilterIcon } from "./filter.js";

export class ShIconFilter extends FilterIcon {}

defineIcon("sh-icon-filter", ShIconFilter);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-filter": ShIconFilter;
  }
}
