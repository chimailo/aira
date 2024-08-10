import type { Meta, StoryObj } from '@storybook/react';

import { Slider, SliderOutput, SliderTrack } from '../slider';
import { Label } from '../utils';

const meta: Meta<typeof Slider> = {
  title: 'Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicHorizontal: Story = {
  args: {
    isDisabled: false,
    defaultValue: 60,
    maxValue: 100,
    minValue: 0,
  },
  render(args) {
    return (
      <Slider {...args} orientation="horizontal" className="w-72">
        <SliderTrack></SliderTrack>
      </Slider>
    );
  },
};

export const Vertical: Story = {
  args: { ...BasicHorizontal.args },
  render(args) {
    return (
      <Slider {...args} orientation="vertical" className="h-72">
        <SliderTrack></SliderTrack>
      </Slider>
    );
  },
};

export const HorizontalWithLabel: Story = {
  args: { ...BasicHorizontal.args },
  render(args) {
    return (
      <Slider
        {...args}
        orientation="horizontal"
        className="w-72 grid-cols-[1fr_auto] grid gap-4"
      >
        <Label>Range</Label>
        <SliderOutput></SliderOutput>
        <SliderTrack className="col-span-2"></SliderTrack>
      </Slider>
    );
  },
};
