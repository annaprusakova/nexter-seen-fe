import type { Meta, Story } from '@storybook/react';

import { Button } from './Button';
import { IButton } from './button.interfaces';

export default {
	title: 'UI/Button',
	component: Button,
	argTypes: {
		// define arg types if needed
	}
} as Meta;

const Template: Story<IButton> = (args: IButton) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	text: 'Primary Button',
	onClick: () => undefined
};
