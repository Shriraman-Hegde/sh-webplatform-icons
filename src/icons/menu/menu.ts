import { html } from "lit";
import { ShIcon } from "../../icon/index.js";

export class MenuIcon extends ShIcon {
  protected renderGlyph() {
    return html`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>
    `;
  }
}
