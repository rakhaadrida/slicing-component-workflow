import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";
import TestimonialCard from "./TestimonialCard";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/TestimonialCard",
  component: TestimonialCard,
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
} satisfies Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Left: Story = {
  args: {
    name: "John Doe",
    position: "Operations Manager",
    testimonial:
      "Flowscape has transformed our workflow. The automation features have saved us countless hours.",
  },
};

export const Center: Story = {
  args: {
    name: "Jane Smith",
    position: "Marketing Director",
    testimonial:
      "The user-friendly interface and seamless integrations have made Flowscape an essential tool for our team.",
  },
};

export const Right: Story = {
  args: {
    name: "Emily Johnson",
    position: "Product Manager",
    testimonial:
      "Flowscape's customer support is outstanding. They helped us set up our automations and provided ongoing assistance whenever we needed it.",
  },
};
