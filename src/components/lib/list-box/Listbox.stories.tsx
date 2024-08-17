import type { Meta, StoryObj } from '@storybook/react';

import { ListBox, ListBoxItem } from './ListBox.tsx';
import { Header, Section, Text, FieldDescription } from '../utils';

const meta: Meta<typeof ListBox> = {
  title: 'ListBox',
  component: ListBox,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleSelection: Story = {
  args: {
    selectionMode: 'single',
  },
  render: (args) => {
    return (
      <ListBox {...args} aria-label="Favorite animal">
        <ListBoxItem>Aardvark</ListBoxItem>
        <ListBoxItem>Cat</ListBoxItem>
        <ListBoxItem>Dog</ListBoxItem>
        <ListBoxItem>Kangaroo</ListBoxItem>
        <ListBoxItem>Panda</ListBoxItem>
        <ListBoxItem>Snake</ListBoxItem>
      </ListBox>
    );
  },
};

export const MultipleSelection: Story = {
  args: {
    selectionMode: 'multiple',
  },
  render: (args) => {
    const options = [
      { id: 1, name: 'Aardvark' },
      { id: 2, name: 'Cat' },
      { id: 3, name: 'Dog' },
      { id: 4, name: 'Kangaroo' },
      { id: 5, name: 'Koala' },
      { id: 6, name: 'Penguin' },
      { id: 7, name: 'Snake' },
      { id: 8, name: 'Turtle' },
      { id: 9, name: 'Wombat' },
    ];

    return (
      <ListBox aria-label="Animals" items={options} {...args}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
      </ListBox>
    );
  },
};

export const Sections: Story = {
  args: {
    selectionMode: 'single',
  },
  argTypes: {
    selectionMode: {
      control: 'radio',
      options: ['single', 'multiple'],
    },
  },
  render: (args) => {
    return (
      <ListBox {...args} aria-label="Sandwich contents">
        <Section>
          <Header className="text-sm font-semibold px-2">Veggies</Header>
          <ListBoxItem id="lettuce">Lettuce</ListBoxItem>
          <ListBoxItem id="tomato">Tomato</ListBoxItem>
          <ListBoxItem id="onion">Onion</ListBoxItem>
        </Section>
        <Section>
          <Header className="text-sm font-semibold px-2">Protein</Header>
          <ListBoxItem id="ham">Ham</ListBoxItem>
          <ListBoxItem id="tuna">Tuna</ListBoxItem>
          <ListBoxItem id="tofu">Tofu</ListBoxItem>
        </Section>
        <Section>
          <Header className="text-sm font-semibold px-2">Condiments</Header>
          <ListBoxItem id="mayo">Mayonaise</ListBoxItem>
          <ListBoxItem id="mustard">Mustard</ListBoxItem>
          <ListBoxItem id="ranch">Ranch</ListBoxItem>
        </Section>
      </ListBox>
    );
  },
};

export const TextSlot: Story = {
  args: {
    selectionMode: 'single',
  },
  argTypes: {
    selectionMode: {
      control: 'radio',
      options: ['single', 'multiple'],
    },
  },
  render: (args) => {
    return (
      <ListBox {...args} aria-label="Permissions">
        <ListBoxItem textValue="Read">
          <div className="grid gap-0.5">
            <Text slot="label">Read</Text>
            <FieldDescription>Read only</FieldDescription>
          </div>
        </ListBoxItem>
        <ListBoxItem textValue="Write">
          <div className="grid gap-0.5">
            <Text slot="label">Write</Text>
            <FieldDescription>Read and write only</FieldDescription>
          </div>
        </ListBoxItem>
        <ListBoxItem textValue="Admin">
          <div className="grid gap-0.5">
            <Text slot="label">Admin</Text>
            <FieldDescription>Full access</FieldDescription>
          </div>
        </ListBoxItem>
      </ListBox>
    );
  },
};

export const EmptyList: Story = {
  render: (args) => {
    return (
      <ListBox
        {...args}
        className={'max-h-[200px]'}
        aria-label="Search results"
        renderEmptyState={() => 'No results found.'}
      >
        {[]}
      </ListBox>
    );
  },
};
