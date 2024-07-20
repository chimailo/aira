import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { Heart } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  // @ts-ignore
  subcomponents: { Heart },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    children: 'Click',
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
  render: (args) => <Button {...args} variant="filled"></Button>,
};

export const Outlined: Story = {
  args: {
    ...Filled.args,
  },
  argTypes: {
    ...Filled.argTypes,
  },
  render: (args) => <Button {...args} variant="outlined"></Button>,
};

export const Text: Story = {
  args: {
    ...Filled.args,
  },
  argTypes: {
    ...Filled.argTypes,
  },
  render: (args) => <Button {...args} variant="text"></Button>,
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
      <Button icon {...args}>
        <Heart />
      </Button>
      <Button icon {...args} variant="outlined">
        <Heart />
      </Button>
      <Button icon {...args} variant="text">
        <Heart />
      </Button>
    </div>
  ),
};

// export const Intent: Story = {
//   args: {
//     intent: 'primary',
//     children: 'Click',
//   },
//   argTypes: {
//     intent: {
//       control: 'radio',
//       options: ['primary', 'secondary', 'danger'],
//     },
//   },
//   render: (args) => (
//     <div className="flex items-center gap-6">
//       <Button {...args}></Button>
//       <Button {...args} variant="outlined"></Button>
//       <Button {...args} variant="text"></Button>
//     </div>
//   ),
// };
