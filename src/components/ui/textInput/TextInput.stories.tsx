import type { Meta, StoryFn } from '@storybook/react';
import { TextInput } from './TextInput';
import { TextInputProps } from './textInput.props';

export default {
	title: 'UI/TextInput',
	component: TextInput
} as Meta;

const Template: StoryFn<TextInputProps> = (args: TextInputProps) => (
	<TextInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
	value: 'test',
	field: 'Name',
	onChange: () => undefined,
	label: 'Name',
	placeholder: 'Name'
};
