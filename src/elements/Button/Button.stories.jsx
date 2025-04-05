import { Meta, StoryObj } from "@storybook/react";

// Note: Using placeholder import path. Update with actual path.
import { Button } from "./index";
import React from "react";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"], // Enable automatic documentation
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
  argTypes: {
    // No props defined
  },
};

// Template for component
const Template = (args) => <Button {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  // No props to set
};
