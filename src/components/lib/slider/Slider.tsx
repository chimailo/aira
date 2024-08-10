import { useContext } from 'react';
import {
  SliderOutput as RACSliderOutput,
  SliderTrack as RACSliderTrack,
  SliderThumb as RACSliderThumb,
  type SliderOutputProps,
  type SliderTrackProps,
  type SliderThumbProps,
  SliderStateContext,
} from 'react-aria-components';

import { cn } from '@/lib/utils';
// import { cva, type VariantProps } from 'class-variance-authority';

const SliderOutput = ({ className, ...props }: SliderOutputProps) => {
  return (
    <RACSliderOutput
      className={cn(
        'text-sm font-medium leading-none',
        /* Disabled */
        'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
        className
      )}
      {...props}
    >
      {({ state }) =>
        state.values.map((_, i) => state.getThumbValueLabel(i)).join(' – ')
      }
    </RACSliderOutput>
  );
};

// interface SliderTrackProps
//   extends RACSliderTrackProps,
//     VariantProps<typeof sliderVariants> {}

// const sliderVariants = cva(
//   [
//     'inline-block rounded-xl text-primary cursor-pointer',
//     /* Horizontal */
//     'data-[orientation=horizontal]:w-full data-[orientation=horizontal]:py-3',
//     /* Vertiacl */
//     'data-[orientation=vertical]:h-full data-[orientation=vertical]:px-3',
//     /* Disabled */
//     'data-[disabled]:opacity-50 data-[disabled]:pointer-events-none',
//   ],
//   {
//     variants: {
//       size: {
//         sm: 'data-[orientation=horizontal]:h-0.5 data-[orientation=vertical]:w-0.5',
//         md: 'data-[orientation=horizontal]:h-1 data-[orientation=vertical]:w-1',
//         // lg: 'data-[orientation=horizontal]:h-1.5 data-[orientation=vertical]:w-1.5',
//       },
//     },
//     defaultVariants: {
//       size: 'md',
//     },
//   }
// );

const SliderTrack = ({ className, ...props }: SliderTrackProps) => {
  return (
    <RACSliderTrack
      className={cn(
        [
          'inline-block rounded-xl text-primary cursor-pointer',
          /* Horizontal */
          'data-[orientation=horizontal]:w-full data-[orientation=horizontal]:py-3 data-[orientation=horizontal]:h-1',
          /* Vertiacl */
          'data-[orientation=vertical]:h-full data-[orientation=vertical]:px-3 data-[orientation=vertical]:w-1',
          /* Disabled */
          'data-[disabled]:opacity-50 data-[disabled]:pointer-events-none',
        ],
        className
      )}
      {...props}
    >
      {({ state }) => {
        const orientation =
          state.orientation === 'vertical' ? 'height' : 'width';
        return (
          <>
            <span
              className={cn(
                'block absolute rounded-[inherit] bg-current opacity-40',
                /* Vertical */
                {
                  'h-full w-[inherit] left-1/2 -translate-x-1/2':
                    state.orientation === 'vertical',
                },
                /* Horizontal */
                {
                  'h-[inherit] w-full top-1/2 -translate-y-1/2':
                    state.orientation === 'horizontal',
                },
                className
              )}
            ></span>
            {/* Fill */}
            <span
              className={cn(
                'rounded-[inherit] bg-current absolute block border border-current box-content',
                /* Vertical */
                {
                  'w-[inherit] left-1/2 -translate-x-1/2 bottom-0':
                    state.orientation === 'vertical',
                },
                /* Horizontal */
                {
                  'h-[inherit] top-1/2 -translate-y-1/2':
                    state.orientation === 'horizontal',
                }
              )}
              style={{
                [orientation]: state.getThumbPercent(0) * 100 + '%',
              }}
            ></span>
            {state.values.map((_, i) => (
              <SliderThumb key={i} index={i} />
            ))}
          </>
        );
      }}
    </RACSliderTrack>
  );
};

const SliderThumb = ({ className, ...props }: SliderThumbProps) => {
  const state = useContext(SliderStateContext);

  return (
    <RACSliderThumb
      className={cn(
        'size-4 rounded-full flex items-center justify-center bg-primary ring-offset-background transition-colors',
        /* Disabled */
        'data-[disabled]:pointer-events-none',
        /* Focus Visible */
        'data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2',
        { 'left-1/2': state.orientation === 'vertical' },
        { 'top-1/2': state.orientation === 'horizontal' },
        className
      )}
      {...props}
    ></RACSliderThumb>
  );
};

export { SliderOutput, SliderTrack, SliderThumb };
export type { SliderOutputProps, SliderTrackProps, SliderThumbProps };
