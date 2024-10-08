import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '../checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isInvalid: false,
    isDisabled: false,
    isReadOnly: false,
    isIndeterminate: false,
    children: 'Accept terms and conditions',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'radio',
      options: ['filled', 'outlined'],
    },
  },
};
