import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '../switch';

const meta: Meta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    isDisabled: false,
    isReadOnly: false,
    size: 'md',
    children: 'Dark Mode',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
  },
};
