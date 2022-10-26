import React from 'react';
import Swatches from '../components/Swatches';
import { ComponentMeta } from '@storybook/react';

let options: Array<string> = [
	'blue',
	'pink',
	'green',
	'yellow',
	'orange',
	'red',
	'purple',
	'Gray',
];

export default {
	title: 'Color/Swatches',
	component: Swatches,
	argTypes: {
		variants: { control: { type: 'select', options } },
	},
} as ComponentMeta<typeof Swatches>

interface IProps {
	variants: string;
}

export const swatches = (args: IProps) => <Swatches {...args} />;

