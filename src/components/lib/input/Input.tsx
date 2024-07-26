import React, { type ForwardedRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  Input as RAC_Input,
  type InputProps as RAC_InputProps,
} from 'react-aria-components';

import { cn } from '@/lib/utils';

interface InputProps
  extends RAC_InputProps,
    VariantProps<typeof inputVariants> {}

const inputVariants = cva(
  'flex h-10 w-full rounded border bg-background px-3 py-2 text-sm ring-offset-background file:bg-transparent transition-colors file:text-sm file:font-medium placeholder:text-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50',
  {
    variants: {
      state: {
        neutral: 'border-input hover:border-secondary',
        primary: 'border-primary/50 hover:border-primary',
        success: 'border-success/50 hover:border-success',
        error: 'border-danger/50 hover:border-danger',
      },
      stretch: {
        false: '',
        true: 'w-full',
      },
    },
    defaultVariants: {
      stretch: false,
    },
  }
);

const Input = React.forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { stretch, state, className } = props;

    return (
      <RAC_Input
        ref={ref}
        className={cn(inputVariants({ state, stretch }), className)}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
export type { InputProps };
