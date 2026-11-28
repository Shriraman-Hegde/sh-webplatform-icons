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
    <sh-icon-bell .size=${args.size} color=${args.color}></sh-icon-bell>
    <sh-icon-bold .size=${args.size} color=${args.color}></sh-icon-bold>
    <sh-icon-calendar .size=${args.size} color=${args.color}></sh-icon-calendar>
    <sh-icon-check .size=${args.size} color=${args.color}></sh-icon-check>
    <sh-icon-chevron-down .size=${args.size} color=${args.color}></sh-icon-chevron-down>
    <sh-icon-chevron-left .size=${args.size} color=${args.color}></sh-icon-chevron-left>
    <sh-icon-chevron-right .size=${args.size} color=${args.color}></sh-icon-chevron-right>
    <sh-icon-chevron-up .size=${args.size} color=${args.color}></sh-icon-chevron-up>
    <sh-icon-chevrons-left .size=${args.size} color=${args.color}></sh-icon-chevrons-left>
    <sh-icon-chevrons-right .size=${args.size} color=${args.color}></sh-icon-chevrons-right>
    <sh-icon-clock .size=${args.size} color=${args.color}></sh-icon-clock>
    <sh-icon-close .size=${args.size} color=${args.color}></sh-icon-close>
    <sh-icon-copy .size=${args.size} color=${args.color}></sh-icon-copy>
    <sh-icon-download .size=${args.size} color=${args.color}></sh-icon-download>
    <sh-icon-edit .size=${args.size} color=${args.color}></sh-icon-edit>
    <sh-icon-error .size=${args.size} color=${args.color}></sh-icon-error>
    <sh-icon-external-link .size=${args.size} color=${args.color}></sh-icon-external-link>
    <sh-icon-eye .size=${args.size} color=${args.color}></sh-icon-eye>
    <sh-icon-eye-off .size=${args.size} color=${args.color}></sh-icon-eye-off>
    <sh-icon-file .size=${args.size} color=${args.color}></sh-icon-file>
    <sh-icon-filter .size=${args.size} color=${args.color}></sh-icon-filter>
    <sh-icon-folder .size=${args.size} color=${args.color}></sh-icon-folder>
    <sh-icon-home .size=${args.size} color=${args.color}></sh-icon-home>
    <sh-icon-info .size=${args.size} color=${args.color}></sh-icon-info>
    <sh-icon-italic .size=${args.size} color=${args.color}></sh-icon-italic>
    <sh-icon-link .size=${args.size} color=${args.color}></sh-icon-link>
    <sh-icon-list .size=${args.size} color=${args.color}></sh-icon-list>
    <sh-icon-lock .size=${args.size} color=${args.color}></sh-icon-lock>
    <sh-icon-mail .size=${args.size} color=${args.color}></sh-icon-mail>
    <sh-icon-menu .size=${args.size} color=${args.color}></sh-icon-menu>
    <sh-icon-minus .size=${args.size} color=${args.color}></sh-icon-minus>
    <sh-icon-phone .size=${args.size} color=${args.color}></sh-icon-phone>
    <sh-icon-plus .size=${args.size} color=${args.color}></sh-icon-plus>
    <sh-icon-refresh .size=${args.size} color=${args.color}></sh-icon-refresh>
    <sh-icon-search .size=${args.size} color=${args.color}></sh-icon-search>
    <sh-icon-settings .size=${args.size} color=${args.color}></sh-icon-settings>
    <sh-icon-trash .size=${args.size} color=${args.color}></sh-icon-trash>
    <sh-icon-underline .size=${args.size} color=${args.color}></sh-icon-underline>
    <sh-icon-upload .size=${args.size} color=${args.color}></sh-icon-upload>
    <sh-icon-user .size=${args.size} color=${args.color}></sh-icon-user>
    <sh-icon-warn .size=${args.size} color=${args.color}></sh-icon-warn>
    </div>
  `,
};

export default meta;
type Story = StoryObj;
export const All: Story = {};
