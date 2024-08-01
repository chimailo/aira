import type { Meta, StoryObj } from '@storybook/react';

import { Input, Textarea, TextField } from '../text-field';
import { FieldDescription, FieldError, Label } from '../utils';

const meta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  subcomponents: { Input, Label, FieldDescription, FieldError, Textarea },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    isReadOnly: false,
    isInvalid: false,
    isDisabled: false,
    isRequired: false,
  },
  render: (args) => {
    return (
      <TextField {...args}>
        <Label
          invalid={args.isInvalid}
          required={args.isRequired}
          disabled={args.isDisabled}
        >
          Username
        </Label>
        <Input />
        {args.isInvalid && <FieldError>Invalid input</FieldError>}
      </TextField>
    );
  },
};

export const PrimaryInput: Story = {
  args: {
    isReadOnly: false,
    isInvalid: false,
    isDisabled: false,
    isRequired: false,
  },
  render: (args) => {
    return (
      <TextField {...args}>
        <Label
          invalid={args.isInvalid}
          required={args.isRequired}
          disabled={args.isDisabled}
        >
          Username
        </Label>
        <Input variant="primary" />
        {args.isInvalid && <FieldError>Invalid input</FieldError>}
      </TextField>
    );
  },
};

export const SuccessInput: Story = {
  args: {
    isReadOnly: false,
    isDisabled: false,
    isRequired: false,
  },
  render: (args) => {
    return (
      <TextField {...args}>
        <Label
          invalid={args.isInvalid}
          required={args.isRequired}
          disabled={args.isDisabled}
        >
          Username
        </Label>
        <Input variant="success" />
      </TextField>
    );
  },
};

export const WithInputDescription: Story = {
  args: {
    isReadOnly: false,
    isDisabled: false,
    isInvalid: false,
    isRequired: false,
  },
  render: (args) => {
    return (
      <TextField {...args}>
        <Label
          invalid={args.isInvalid}
          required={args.isRequired}
          disabled={args.isDisabled}
        >
          Username
        </Label>
        <Input />
        <FieldDescription>Only alpha-num chars allowed</FieldDescription>
        {args.isInvalid && <FieldError>Invalid input</FieldError>}
      </TextField>
    );
  },
};

export const DefaultTextarea: Story = {
  args: {
    isReadOnly: false,
    isInvalid: false,
    isRequired: false,
    isDisabled: false,
  },
  render: (args) => {
    return (
      <TextField {...args}>
        <Label
          invalid={args.isInvalid}
          required={args.isRequired}
          disabled={args.isDisabled}
        >
          Comments
        </Label>
        <Textarea />
        {args.isInvalid && <FieldError>Invalid input</FieldError>}
      </TextField>
    );
  },
};

export const PrimaryTextarea: Story = {
  args: {
    isReadOnly: false,
    isInvalid: false,
    isRequired: false,
    isDisabled: false,
  },
  render: (args) => {
    return (
      <TextField {...args}>
        <Label
          invalid={args.isInvalid}
          required={args.isRequired}
          disabled={args.isDisabled}
        >
          Comments
        </Label>
        <Textarea variant="primary" />
        {args.isInvalid && <FieldError>Invalid input</FieldError>}
      </TextField>
    );
  },
};

export const SuccessTextarea: Story = {
  args: {
    isReadOnly: false,
    isRequired: false,
    isDisabled: false,
  },
  render: (args) => {
    return (
      <TextField {...args}>
        <Label required={args.isRequired} disabled={args.isDisabled}>
          Comments
        </Label>
        <Textarea variant="success" />
      </TextField>
    );
  },
};

export const WithTextareaDescription: Story = {
  args: {
    isReadOnly: false,
    isRequired: false,
    isDisabled: false,
    isInvalid: false,
  },
  render: (args) => {
    return (
      <TextField {...args}>
        <Label
          invalid={args.isInvalid}
          required={args.isRequired}
          disabled={args.isDisabled}
        >
          Comments
        </Label>
        <Textarea />
        <FieldDescription>Only alpha-num chars allowed</FieldDescription>
        {args.isInvalid && <FieldError>Invalid input</FieldError>}
      </TextField>
    );
  },
};
