import React, { type ForwardedRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  Checkbox as AriaCheckBox,
  type CheckboxProps as AriaCheckboxProps,
} from 'react-aria-components';

import { cn } from '@/lib/utils';

interface checkboxInputProps
  extends AriaCheckboxProps,
    VariantProps<typeof checkboxInputVariants> {}

const checkboxInputVariants = cva(
  'text-current border border-current rounded grid place-content-center transition-colors group-data-[selected]:border-primary before:scale-0 before:shadow-inner before:transition-transform before:origin-bottom-left  before:group-data-[selected]:scale-100  group-data-[focus-visible]:ring group-data-[focus-visible]:ring-ring group-data-[focus-visible]:ring-offset-2',
  {
    variants: {
      variant: {
        filled: 'group-data-[selected]:bg-primary before:group-data-[selected]:bg-primary-foreground',
        outlined: 'before:group-data-[selected]:bg-primary',
      },
      size: {
        sm: 'w-3.5 h-3.5 before:w-2 before:h-2',
        md: 'w-4 h-4 before:w-2.5 before:h-2.5',
        lg: 'w-5 h-5 before:w-3 before:h-3',
      },
      invalid: {
        false: '',
        true: 'border-danger',
      },
      indeterminate: {
        false: 'before:[clip-path:polygon(14%_44%,0_65%,50%_100%,100%_16%,80%_0%,43%_62%)]',
        true: 'before:[clip-path:polygon(100%_35%,100%_60%,0%_60%,0%_35%)]',
      }
    },
    defaultVariants: {
      variant: 'filled',
      size: 'md',
      invalid: false,
      indeterminate: false,
    },
  }
);

function CheckboxInput(props: checkboxInputProps) {
  const { size, invalid, variant, indeterminate, className } = props;

  return (
    <div className={cn(checkboxInputVariants({ size, invalid, variant, indeterminate }), className)}>
    </div>
  );
}

interface CheckboxProps
  extends AriaCheckboxProps,
    VariantProps<typeof checkboxVariants> {
      invalid: boolean;
      variant: 'filled' | 'outlined'
    }

const checkboxVariants = cva(
  'grid group place-items-center data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
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

const Checkbox = React.forwardRef(
  (props: CheckboxProps, ref: ForwardedRef<HTMLLabelElement>) => {
    const { size, invalid, variant, className, children } = props;

    return (
      <AriaCheckBox
        ref={ref}
        className={cn(checkboxVariants({ size }), className)}
        {...props}
      >
        {({ isIndeterminate }) => (
          <>
            <CheckboxInput size={size} invalid={invalid} variant={variant} indeterminate={isIndeterminate} />
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
