import type { Meta, StoryObj } from '@storybook/react';

import Link from './Link';
import { ExternalLink } from 'lucide-react';

const meta: Meta<typeof Link> = {
  title: 'Link',
  component: Link,
  // @ts-ignore
  subcomponents: { ExternalLink },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    href: 'https://storybook.js.org',
    children: 'Storybook',
  },
  argTypes: {
    intent: {
      control: 'radio',
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    round: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
  },
  render: (args) => <Link {...args} variant="filled"></Link>,
};

export const Outlined: Story = {
  args: {
    ...Filled.args,
  },
  argTypes: {
    ...Filled.argTypes,
  },
  render: (args) => <Link {...args} variant="outlined"></Link>,
};

export const Text: Story = {
  args: {
    ...Filled.args,
  },
  argTypes: {
    ...Filled.argTypes,
  },
  render: (args) => <Link {...args} variant="text"></Link>,
};

export const Icons: Story = {
  args: {
    ...Filled.args,
  },
  argTypes: {
    ...Filled.argTypes,
  },
  render: (args) => (
    <div className="flex items-center gap-6">
      <Link icon {...args}>
        <ExternalLink />
      </Link>
      <Link icon {...args} variant="outlined">
        <ExternalLink />
      </Link>
      <Link icon {...args} variant="text">
        <ExternalLink />
      </Link>
    </div>
  ),
};
