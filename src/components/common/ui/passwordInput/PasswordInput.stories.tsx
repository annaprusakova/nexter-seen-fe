import type { Meta, Story } from "@storybook/react";
import { PasswordInput } from "./PasswordInput";
import { IPasswordInput } from "./passwordInput.interfaces";

export default {
  title: "UI/PasswordInput",
  component: PasswordInput,
} as Meta;

const Template: Story<IPasswordInput> = (args: IPasswordInput) => (
  <PasswordInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: "test",
  field: "Password",
  error: undefined,
  onChange: () => {},
};
