import React from 'react'
import Badges from '../components/Badges';
import { ComponentMeta } from '@storybook/react';

let options: Array<string> = ['blue', 'pink', 'green', 'yellow', 'orange', 'red', 'purple', 'black', 'lightBlue', 'lightPink', 'lightGreen', 'lightYellow', 'lightOrange', 'lightRed', 'lightPurple', 'Gray']

export default {
    title: "Component/Badges",
    component: Badges,
    argTypes: {
        variant: { control: { type: 'select', options } },
    },

} as ComponentMeta<typeof Badges>

interface IProps {
    label: string
    variant?: string
}


export const badges = (args: IProps) => <Badges {...args} />

badges.args = {
    label: "Label Text"
}