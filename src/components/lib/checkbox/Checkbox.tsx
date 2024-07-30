import React, { type ForwardedRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  Checkbox as RACCheckBox,
  type CheckboxProps as RACCheckboxProps,
} from 'react-aria-components';

import { cn } from '@/lib/utils';

interface checkboxInputProps
  extends RACCheckboxProps,
    VariantProps<typeof checkboxInputVariants> {}

const checkboxInputVariants = cva(
  [
    'text-current border border-current rounded grid place-content-center transition-colors',
    /* Checkmark */
    'before:scale-0 before:shadow-inner before:transition-transform before:origin-bottom-left before:[clip-path:polygon(14%_44%,0_65%,50%_100%,100%_16%,80%_0%,43%_62%)]',
    /* Selected */
    'group-data-[selected]:border-primary before:group-data-[selected]:scale-100',
    /* Focus visible */
    'group-data-[focus-visible]:ring group-data-[focus-visible]:ring-ring group-data-[focus-visible]:ring-offset-2',
    /* Invalid */
    'group-data-[invalid]:border-danger',
    /* Indeterminate */
    'before:group-data-[indeterminate]:[clip-path:polygon(100%_35%,100%_60%,0%_60%,0%_35%)]',
  ],
  {
    variants: {
      variant: {
        filled:
          'group-data-[selected]:bg-primary before:group-data-[selected]:bg-primary-foreground',
        outlined: 'before:group-data-[selected]:bg-primary',
      },
      size: {
        sm: 'w-3.5 h-3.5 before:w-2 before:h-2 translate-y-0.5',
        md: 'w-4 h-4 before:w-2.5 before:h-2.5 translate-y-1',
        lg: 'w-5 h-5 before:w-3 before:h-3 translate-y-1',
      },
    },
    defaultVariants: {
      variant: 'filled',
      size: 'md',
    },
  }
);

function CheckboxInput(props: checkboxInputProps) {
  const { size, variant, className } = props;

  return (
    <div
      className={cn(checkboxInputVariants({ size, variant }), className)}
    ></div>
  );
}

interface CheckboxProps
  extends RACCheckboxProps,
    VariantProps<typeof checkboxVariants> {
  variant?: 'filled' | 'outlined';
}

const checkboxVariants = cva(
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
        sm: 'text-sm grid-cols-[0.75rem_auto] gap-1.5',
        md: 'text-base grid-cols-[1rem_auto] gap-1.5',
        lg: 'text-lg grid-cols-[1.25rem_auto] gap-2',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const Checkbox = React.forwardRef(
  (props: CheckboxProps, ref: ForwardedRef<HTMLLabelElement>) => {
    const { size, variant, className, children } = props;

    return (
      <RACCheckBox
        ref={ref}
        className={cn(checkboxVariants({ size }), className)}
        {...props}
      >
        {(renderProps) => (
          <>
            <CheckboxInput size={size} variant={variant} {...renderProps} />
            {children}
          </>
        )}
      </RACCheckBox>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
export type { CheckboxProps };
