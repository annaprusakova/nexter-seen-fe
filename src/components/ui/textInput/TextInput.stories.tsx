import type { Meta, StoryFn } from '@storybook/react';
import { TextInput } from './TextInput';
import { ITextInput } from './textInput.interfaces';

export default {
	title: 'UI/TextInput',
	component: TextInput
} as Meta;

const Template: StoryFn<ITextInput> = (args: ITextInput) => (
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
