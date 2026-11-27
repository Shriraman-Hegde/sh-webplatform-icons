import { html } from "lit";
import { ShIcon } from "../../icon/index.js";

export class SearchIcon extends ShIcon {
  protected renderGlyph() {
    return html`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    `;
  }
}
