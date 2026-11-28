import { html } from "lit";
import { ShIcon } from "../../icon/index.js";

export class BellIcon extends ShIcon {
  protected renderGlyph() {
    return html`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9a6 6 0 1 1 12 0c0 7 2 7 2 7H4s2 0 2-7"/><path d="M10 19a2 2 0 0 0 4 0"/></svg>
    `;
  }
}
