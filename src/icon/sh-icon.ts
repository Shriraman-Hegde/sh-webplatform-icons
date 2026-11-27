import { css, html, LitElement, type TemplateResult } from "lit";

/**
 * Base element for generated `sh-icon-*` components.
 * Size defaults to 24; color inherits via `currentColor`.
 */
export class ShIcon extends LitElement {
  static properties = {
    color: { type: String, reflect: true },
    size: { type: Number, reflect: true },
    label: { type: String },
  };

  declare color: string;
  declare size: number;
  declare label: string;

  constructor() {
    super();
    this.color = "inherit";
    this.size = 24;
    this.label = "";
  }

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
      color: inherit;
      width: var(--sh-icon-size, 1.5rem);
      height: var(--sh-icon-size, 1.5rem);
    }
    svg {
      width: 100%;
      height: 100%;
      display: block;
    }
  `;

  protected updated(): void {
    this.style.setProperty("--sh-icon-size", `${this.size}px`);
    if (this.color && this.color !== "inherit") {
      this.style.color = this.color;
    } else {
      this.style.removeProperty("color");
    }
  }

  /** Override in generated subclasses. */
  protected renderGlyph(): TemplateResult | unknown {
    return null;
  }

  render() {
    const glyph = this.renderGlyph();
    if (this.label) {
      return html`<span role="img" aria-label=${this.label}>${glyph}</span>`;
    }
    return html`<span aria-hidden="true">${glyph}</span>`;
  }
}
