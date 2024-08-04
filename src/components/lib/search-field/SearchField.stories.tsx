import type { Meta, StoryObj } from '@storybook/react';

import { SearchInput, SearchField } from '../search-field';
import { FieldError, Label } from '../utils';

const meta: Meta<typeof SearchField> = {
  title: 'SearchField',
  component: SearchField,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  subcomponents: { SearchInput, Label, FieldError },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isReadOnly: false,
    isInvalid: false,
    isDisabled: false,
  },
  render: (args) => {
    return (
      <SearchField {...args}>
        <Label invalid={args.isInvalid} disabled={args.isDisabled}>
          Search
        </Label>
        <SearchInput />
        <FieldError>Invalid input</FieldError>
      </SearchField>
    );
  },
};
