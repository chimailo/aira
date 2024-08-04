import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  Radio as RACRadio,
  type RadioProps as RACRadioProps,
} from 'react-aria-components';

import { cn } from '@/lib/utils';

// interface RadioInputProps
//   extends Omit<RACRadioProps, 'value'>,
//     VariantProps<typeof radioButtonVariants> {}

const radioButtonVariants = cva(
  [
    'text-current border border-current rounded-full translate-y-1 grid place-content-center transition-colors',
    /* button */
    'before:scale-0 before:shadow-inner before:transition-transform before:rounded-full',
    /* Selected */
    'group-data-[selected]:border-primary before:group-data-[selected]:bg-primary before:group-data-[selected]:scale-100',
    /* Focus visible */
    'group-data-[focus-visible]:ring group-data-[focus-visible]:ring-ring group-data-[focus-visible]:ring-offset-2',
    /* Invalid */
    'group-data-[invalid]:border-danger',
  ],
  {
    variants: {
      size: {
        sm: 'w-3.5 h-3.5 before:w-2 before:h-2',
        md: 'w-4 h-4 before:w-2.5 before:h-2.5',
        lg: 'w-5 h-5 before:w-3 before:h-3',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

// function RadioInput(props: RadioInputProps) {
//   const { size, className } = props;

//   return <div className={cn(radioButtonVariants({ size }), className)}></div>;
// }

interface RadioProps
  extends RACRadioProps,
    VariantProps<typeof radioVariants> {}

const radioVariants = cva(
  [
    'grid group',
    /* Disabled */
    'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
    /* Read only */
    'data-[readOnly]:opacity-80 data-[readOnly]:pointer-events-none',
  ],
  {
    variants: {
      size: {
        sm: 'text-sm grid-cols-[0.75rem_auto] gap-1',
        md: 'text-base grid-cols-[1rem_auto] gap-1.5',
        lg: 'text-lg grid-cols-[1.25rem_auto] gap-2',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const Radio = React.forwardRef<HTMLLabelElement, RadioProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <RACRadio ref={ref} className={cn(radioVariants(), className)} {...props}>
        {() => (
          <>
            <div className={cn(radioButtonVariants(), className)}></div>
            {/* <RadioInput size={size} {...renderProps}></RadioInput> */}
            {children}
          </>
        )}
      </RACRadio>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
export type { RadioProps };
