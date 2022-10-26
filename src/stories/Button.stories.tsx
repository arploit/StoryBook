import React from 'react';
import Button from '../components/Button/Button';

export default {
    title: 'Component/Button',
    component: Button,

};

export const button = (args: any) => <Button {...args} />;

button.args = {
    label: 'Button',
};
