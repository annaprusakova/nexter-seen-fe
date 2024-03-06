import type { Meta, Story } from '@storybook/react';
import { Heading } from './Heading';
import { IHeading, SIZE } from './heading.interfaces';

export default {
	title: 'UI/Heading',
	component: Heading,
	argTypes: {
		// define arg types if needed
	}
} as Meta;

const Template: Story<IHeading> = (args: IHeading) => <Heading {...args} />;

export const H1 = Template.bind({});
H1.args = {
	size: SIZE.H1,
	text: 'Default'
};
