import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxGroup } from '../checkbox';
import { Label, FieldDescription, FieldError } from '../utils';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  subcomponents: { Checkbox, Label, FieldDescription, FieldError },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    isInvalid: false,
    isDisabled: false,
    isReadOnly: false,
  },
  render: (args) => {
    return (
      <CheckboxGroup {...args} className="space-y-2">
        <Label>Select Items</Label>
        <Checkbox value="first">First Item</Checkbox>
        <Checkbox value="second">Second Item</Checkbox>
        <Checkbox value="third">Third Item</Checkbox>
        <Checkbox value="fourth">Fourth Item</Checkbox>
        {args.isInvalid && <FieldError>Please select an answer</FieldError>}
      </CheckboxGroup>
    );
  },
};

export const WithDescription: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => {
    return (
      <CheckboxGroup {...args} className="space-y-2">
        <Label>Select Items</Label>
        <Checkbox value="first">First Item</Checkbox>
        <Checkbox value="second">Second Item</Checkbox>
        <Checkbox value="third">Third Item</Checkbox>
        <Checkbox value="fourth">Fourth Item</Checkbox>
        <FieldDescription>Select an answer</FieldDescription>
        {args.isInvalid && <FieldError>Please select an answer</FieldError>}
      </CheckboxGroup>
    );
  },
};
