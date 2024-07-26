import React, { type ForwardedRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  Checkbox as AriaCheckBox,
  type CheckboxProps as AriaCheckboxProps,
} from 'react-aria-components';

import { cn } from '@/lib/utils';

interface CheckboxProps
  extends AriaCheckboxProps,
    VariantProps<typeof checkboxVariants> {}

const checkboxVariants = cva(
  'flex items-center gap-2 forced-color-adjust-none group data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
  {
    variants: {
      variant: {
        secondary: 'border-input hover:border-secondary',
        primary: 'border-primary/50 hover:border-primary',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg ',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

interface checkboxInputProps
  extends AriaCheckboxProps,
    VariantProps<typeof checkboxInputVariants> {}

const checkboxInputVariants = cva(
  'text-current border-2 border-input rounded flex items-center justify-center transition-all group-focus-visible:outline-none group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        secondary:
          'hover:border-neutral-500 group-data-[pressed]:border-neutral-500 group-data-[selected]:border-neutral-500 group-data-[selected]:bg-neutral-500 group-data-[indeterminate]:border-neutral-500 group-data-[indeterminate]:bg-neutral-500',
        primary:
          'hover:border-primary group-data-[pressed]:border-primary group-data-[selected]:border-primary group-data-[selected]:bg-primary group-data-[indeterminate]:border-primary group-data-[indeterminate]:bg-primary',
      },
      size: {
        sm: 'text-sm w-4 h-4',
        md: 'text-base w-5 h-5',
        lg: 'text-lg w-6 h-6',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

function CheckboxInput(props: checkboxInputProps) {
  const { variant, size, className } = props;

  return (
    <div className={cn(checkboxVariants({ size, variant }), className)}>
      <svg
        viewBox="0 0 18 18"
        aria-hidden="true"
        className={cn(
          checkboxVariants({ size }),
          'fill-none transition-all stroke-2 stroke-white'
        )}
      >
        <polyline points="1 9 7 14 15 4" />
      </svg>
    </div>
  );
}

const Checkbox = React.forwardRef(
  (props: CheckboxProps, ref: ForwardedRef<HTMLLabelElement>) => {
    const { variant, size, className, children } = props;

    return (
      <AriaCheckBox
        ref={ref}
        className={cn(checkboxVariants({ size, variant }), className)}
        {...props}
      >
        {({ isIndeterminate }) => (
          <>
            <div className="checkbox">
              <svg viewBox="0 0 18 18" aria-hidden="true">
                <polyline points="1 9 7 14 15 4" />
              </svg>
            </div>
            {children}
          </>
        )}
      </AriaCheckBox>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
export type { CheckboxProps };
