import { defineIcon } from "../../define.js";
import { CalendarIcon } from "./calendar.js";

export class ShIconCalendar extends CalendarIcon {}

defineIcon("sh-icon-calendar", ShIconCalendar);

declare global {
  interface HTMLElementTagNameMap {
    "sh-icon-calendar": ShIconCalendar;
  }
}
