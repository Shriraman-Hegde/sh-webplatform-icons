import { defineIcon } from "../../define.js";
import { LockIcon } from "./lock.js";

export class ShIconLock extends LockIcon {}

defineIcon("sh-icon-lock", ShIconLock);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-lock": ShIconLock;
  }
}
