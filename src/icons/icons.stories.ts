import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./index.js";

const meta: Meta = {
  title: "Icons/Set",
  argTypes: {
    size: { control: { type: "number", min: 12, max: 48, step: 2 } },
    color: { control: "color" },
  },
  args: {
    size: 24,
    color: "#132238",
  },
  render: (args) => html`
    <div style="display:flex;flex-wrap:wrap;gap:1rem;padding:1.5rem;align-items:center">
    <sh-icon-bold .size=${args.size} color=${args.color}></sh-icon-bold>
    <sh-icon-check .size=${args.size} color=${args.color}></sh-icon-check>
    <sh-icon-chevron-down .size=${args.size} color=${args.color}></sh-icon-chevron-down>
    <sh-icon-chevron-left .size=${args.size} color=${args.color}></sh-icon-chevron-left>
    <sh-icon-chevron-right .size=${args.size} color=${args.color}></sh-icon-chevron-right>
    <sh-icon-chevron-up .size=${args.size} color=${args.color}></sh-icon-chevron-up>
    <sh-icon-close .size=${args.size} color=${args.color}></sh-icon-close>
    <sh-icon-edit .size=${args.size} color=${args.color}></sh-icon-edit>
    <sh-icon-error .size=${args.size} color=${args.color}></sh-icon-error>
    <sh-icon-external-link .size=${args.size} color=${args.color}></sh-icon-external-link>
    <sh-icon-home .size=${args.size} color=${args.color}></sh-icon-home>
    <sh-icon-info .size=${args.size} color=${args.color}></sh-icon-info>
    <sh-icon-italic .size=${args.size} color=${args.color}></sh-icon-italic>
    <sh-icon-link .size=${args.size} color=${args.color}></sh-icon-link>
    <sh-icon-list .size=${args.size} color=${args.color}></sh-icon-list>
    <sh-icon-menu .size=${args.size} color=${args.color}></sh-icon-menu>
    <sh-icon-minus .size=${args.size} color=${args.color}></sh-icon-minus>
    <sh-icon-plus .size=${args.size} color=${args.color}></sh-icon-plus>
    <sh-icon-search .size=${args.size} color=${args.color}></sh-icon-search>
    <sh-icon-settings .size=${args.size} color=${args.color}></sh-icon-settings>
    <sh-icon-trash .size=${args.size} color=${args.color}></sh-icon-trash>
    <sh-icon-underline .size=${args.size} color=${args.color}></sh-icon-underline>
    <sh-icon-user .size=${args.size} color=${args.color}></sh-icon-user>
    <sh-icon-warn .size=${args.size} color=${args.color}></sh-icon-warn>
    </div>
  `,
};

export default meta;
type Story = StoryObj;
export const All: Story = {};
