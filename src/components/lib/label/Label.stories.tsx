import type { Meta, StoryObj } from '@storybook/react';

import Label from './Label';

const meta: Meta<typeof Label> = {
  title: 'Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Accept terms and conditions',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: true,
  },
};
