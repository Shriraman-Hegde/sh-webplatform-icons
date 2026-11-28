import { defineIcon } from "../../define.js";
import { MailIcon } from "./mail.js";

export class ShIconMail extends MailIcon {}

defineIcon("sh-icon-mail", ShIconMail);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-mail": ShIconMail;
  }
}
