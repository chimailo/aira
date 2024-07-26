import type { Meta, StoryObj } from '@storybook/react';

import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    state: 'neutral',
    disabled: false,
    stretch: false,
  },
  argTypes: {
    state: {
      control: 'radio',
      options: ['primary', 'neutral', 'error', 'success'],
    },
  },
};
