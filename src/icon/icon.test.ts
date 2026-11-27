import { expect, fixture, html } from "@open-wc/testing";
import { iconRegistry, registerAllIcons } from "../registry.js";
import "./index.js";
import "../icons/check/index.js";

describe("@sh-webplatform/icons", () => {
  it("registers check icon and resolves SVG from registry", async () => {
    registerAllIcons();
    const el = await fixture(html`<sh-icon-check size="20"></sh-icon-check>`);
    expect(el.shadowRoot?.querySelector("svg")).to.exist;
    expect(iconRegistry.get("check")).to.exist;
    expect(iconRegistry.names).to.include("check");
  });
});
