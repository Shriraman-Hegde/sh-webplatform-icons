import { html } from "lit";
import { ShIcon } from "../../icon/index.js";

export class ErrorIcon extends ShIcon {
  protected renderGlyph() {
    return html`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
    `;
  }
}
