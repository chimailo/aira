import type { Meta, StoryObj } from '@storybook/react';

import { NumberInput, NumberField } from '../number-field';
import {
  FieldDescription,
  FieldError,
  FieldGroup,
  Input,
  Label,
} from '@/components/lib/utils';
import { Button } from '../button';

const meta: Meta<typeof NumberField> = {
  title: 'NumberField',
  component: NumberField,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  subcomponents: { NumberInput },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isReadOnly: false,
    isRequired: false,
    isDisabled: false,
    isInvalid: false,
  },
  render(args) {
    return (
      <NumberField {...args} defaultValue={1024} minValue={0}>
        <Label>Width</Label>
        <NumberInput></NumberInput>
        <FieldDescription>Only numbers allowed</FieldDescription>
        <FieldError>Invalid input</FieldError>
      </NumberField>
    );
  },
};

export const DecimalFormatting: Story = {
  ...Default.args,
  render(args) {
    return (
      <NumberField
        {...args}
        defaultValue={3.142}
        formatOptions={{
          signDisplay: 'auto',
          minimumFractionDigits: 1,
          maximumFractionDigits: 2,
        }}
      >
        <Label>Value</Label>
        <NumberInput></NumberInput>
        <FieldDescription>Only numbers allowed</FieldDescription>
        <FieldError>Invalid input</FieldError>
      </NumberField>
    );
  },
};

export const CurrencyFormatting: Story = {
  ...Default.args,
  render(args) {
    return (
      <NumberField
        {...args}
        defaultValue={14}
        minValue={12}
        formatOptions={{
          style: 'currency',
          currency: 'EUR',
        }}
      >
        <Label>Transaction Amount</Label>
        <NumberInput></NumberInput>
        <FieldDescription>Only numbers allowed</FieldDescription>
        <FieldError>Invalid input</FieldError>
      </NumberField>
    );
  },
};

export const PercentageFormatting: Story = {
  ...Default.args,
  render(args) {
    return (
      <NumberField
        {...args}
        defaultValue={0.39}
        formatOptions={{
          style: 'percent',
        }}
      >
        <Label>Percentage Profit</Label>
        <NumberInput></NumberInput>
        <FieldDescription>Only numbers allowed</FieldDescription>
        <FieldError>Invalid input</FieldError>
      </NumberField>
    );
  },
};

export const UnitsFormatting: Story = {
  ...Default.args,
  render(args) {
    return (
      <NumberField
        {...args}
        defaultValue={8}
        formatOptions={{
          style: 'unit',
          unit: 'inch',
          unitDisplay: 'short',
        }}
      >
        <Label>Length</Label>
        <NumberInput></NumberInput>
        <FieldDescription>Only numbers allowed</FieldDescription>
        <FieldError>Invalid input</FieldError>
      </NumberField>
    );
  },
};

export const CustomInput: Story = {
  ...Default.args,
  render(args) {
    return (
      <NumberField {...args} defaultValue={10} minValue={1} maxValue={12}>
        <Label>Quantity</Label>
        <FieldGroup className="flex items-center">
          <Button slot="decrement" icon variant="text" intent="secondary">
            -
          </Button>
          <Input
            tabIndex={-1}
            className="border-0 focus:ring-0 focus-visible:ring-0"
          />
          <Button slot="increment" icon variant="text" intent="secondary">
            +
          </Button>
        </FieldGroup>
        <FieldDescription>Only numbers allowed</FieldDescription>
        <FieldError>Invalid input</FieldError>
      </NumberField>
    );
  },
};
