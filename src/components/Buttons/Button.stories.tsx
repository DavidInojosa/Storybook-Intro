import { Story, ComponentMeta } from "@storybook/react";
import Button, { ButtonProps } from ".";

export default {
  title: "Buttons/Button",
  component: Button,
  argTypes: {
    variant: {
      defaultValue: "primary",
      control: {
        type: "select",
        options: ["primary", "secondary", "outline"],
      },
    },
  },
} as ComponentMeta<typeof Button>;

export const Primary: Story<ButtonProps> = (args) => (
  <Button {...args}>Primary button</Button>
);

Primary.args = {
  variant: "primary",
};

export const Secondary: Story<ButtonProps> = (args) => (
  <Button {...args}>Secondary Button</Button>
);

Secondary.args = {
  variant: "secondary",
};

export const Outline: Story<ButtonProps> = (args) => (
  <Button {...args}>Outline</Button>
);

Outline.args = {
  variant: "outline",
};
