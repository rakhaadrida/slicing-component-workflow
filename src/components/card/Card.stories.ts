import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";
import Card from "./Card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  //   args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Left: Story = {
  args: {
    label: "Free",
    price: "$0",
    bill: "TEXT",
    billString: "Free For Everyone",
    buttonLabel: "Get Started",
    position: "LEFT",
    featureLists: [
      "Up to 3 Active Automations",
      "Connect up to 5 Apps",
      "Basic Support",
    ],
  },
};

export const Center: Story = {
  args: {
    label: "Pro",
    price: "$12 per User/Month",
    bill: "YEAR",
    buttonLabel: "Get Started",
    position: "CENTER",
    featureLists: [
      "All Free Features",
      "Priority Email Support",
      "Help Center Access",
    ],
  },
};

export const Right: Story = {
  args: {
    label: "Enterprise",
    price: "Contact Us",
    bill: "TEXT",
    billString: "Custom Pricing",
    buttonLabel: "Request Trial",
    position: "RIGHT",
    featureLists: [
      "All Pro Features",
      "Dedicated Account Manager",
      "Custom Integrations",
      "Enterprise-grade Security",
      "Personalized Onboarding",
    ],
  },
};
