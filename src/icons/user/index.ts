import { defineIcon } from "../../define.js";
import { UserIcon } from "./user.js";

export class ShIconUser extends UserIcon {}

defineIcon("sh-icon-user", ShIconUser);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-user": ShIconUser;
  }
}
