import type { Meta, Story } from "@storybook/react";
import { TextLink } from "./TextLink";
import { ITextLink } from "./textLink.interfaces";

export default {
  title: "UI/TextLink",
  component: TextLink,
} as Meta;

const Template: Story<ITextLink> = (args: ITextLink) => <TextLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  link: "http://localhost:3000",
  text: "NexterSeen",
};
