import React from 'react';
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
  'flex h-10 w-full rounded border bg-background px-3 py-2 text-sm ring-offset-background file:bg-transparent transition-colors file:text-sm file:font-medium placeholder:text-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[invalid]:border-danger/70 hover:data-[invalid]:border-danger',
  {
    variants: {
      variant: {
        neutral: 'border-input hover:border-muted-foreground',
        primary: 'border-primary/70 hover:border-primary',
        success: 'border-success/70 hover:border-success',
      },
    },
    defaultVariants: {
      variant: 'neutral',
    },
  }
);

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { variant, className, ...rest } = props;

  return (
    <RAC_Input
      ref={ref}
      className={cn(inputVariants({ variant, className }))}
      {...rest}
    />
  );
});

Input.displayName = 'Input';

export default Input;
export type { InputProps };
