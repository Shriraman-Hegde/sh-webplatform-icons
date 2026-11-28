import { defineIcon } from "../../define.js";
import { ClockIcon } from "./clock.js";

export class ShIconClock extends ClockIcon {}

defineIcon("sh-icon-clock", ShIconClock);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-clock": ShIconClock;
  }
}
