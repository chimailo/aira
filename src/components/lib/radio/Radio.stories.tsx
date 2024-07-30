import type { Meta, StoryObj } from '@storybook/react';

import { Radio, RadioGroup } from '../radio';
import { Label, FieldDescription, FieldError } from '../utils';

const meta: Meta<typeof RadioGroup> = {
  title: 'RadioGroup',
  component: RadioGroup,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  subcomponents: { Radio, Label, FieldDescription, FieldError },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    isInvalid: false,
    isDisabled: false,
    isReadOnly: false,
  },
  render: (args) => {
    return (
      <RadioGroup {...args} className="space-y-2">
        <Label>Select one</Label>
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
        {args.isInvalid && <FieldError>Please select an answer</FieldError>}
      </RadioGroup>
    );
  },
};

export const Horizontal: Story = {
  args: {
    ...Vertical.args,
  },
  render: (args) => {
    return (
      <RadioGroup {...args} className="space-y-2">
        <div className="flex gap-4">
          <Label className="whitespace-nowrap">Select one:</Label>
          <div className="space-y-2">
            <div className="flex items-center gap-3 flex-wrap flex-1">
              <Radio value="1">First</Radio>
              <Radio value="2">Second</Radio>
              <Radio value="3">Third</Radio>
              <Radio value="4">Fourth</Radio>
              <Radio value="5">Fifth</Radio>
              <Radio value="6">Sixth</Radio>
            </div>
            {args.isInvalid && <FieldError>Please select an answer</FieldError>}
          </div>
        </div>
      </RadioGroup>
    );
  },
};

export const WithDescriptionVertical: Story = {
  args: {
    ...Vertical.args,
  },
  render: (args) => {
    return (
      <RadioGroup {...args} className="space-y-2">
        <Label>Select one</Label>
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
        <FieldDescription>Select an answer</FieldDescription>
        {args.isInvalid && <FieldError>Please select an answer</FieldError>}
      </RadioGroup>
    );
  },
};

export const WithDescriptionHorizontal: Story = {
  ...Horizontal,
  render: (args) => {
    return (
      <RadioGroup {...args} className="space-y-2">
        <div className="flex gap-4">
          <Label className="whitespace-nowrap">Select one:</Label>
          <div className="space-y-2">
            <div className="flex items-center gap-3 flex-wrap flex-1">
              <Radio value="1">First</Radio>
              <Radio value="2">Second</Radio>
              <Radio value="3">Third</Radio>
              <Radio value="4">Fourth</Radio>
              <Radio value="5">Fifth</Radio>
              <Radio value="6">Sixth</Radio>
            </div>
            <FieldDescription>Select an answer</FieldDescription>
            {args.isInvalid && <FieldError>Please select an answer</FieldError>}
          </div>
        </div>
      </RadioGroup>
    );
  },
};
