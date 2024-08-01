import React, { type ForwardedRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  Label as RAC_Label,
  type LabelProps as RAC_LabelProps,
} from 'react-aria-components';

import { cn } from '@/lib/utils';

interface LabelProps
  extends RAC_LabelProps,
    VariantProps<typeof labelVariants> {}

const labelVariants = cva(
  [
    'text-sm font-medium leading-none',
    /* Disabled */
    'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70',
  ],
  {
    variants: {
      invalid: {
        false: '',
        true: 'text-danger',
      },
      required: {
        false: '',
        true: "after:content-['*'] after:ml-0.5 after:text-danger",
      },
      disabled: {
        false: '',
        true: 'opacity-50',
      },
      defaultVariants: {
        invalid: 'false',
        required: 'false',
        disabled: 'false',
      },
    },
  }
);

const Label = React.forwardRef(
  (props: LabelProps, ref: ForwardedRef<HTMLLabelElement>) => {
    const { invalid, required, disabled, className } = props;

    return (
      <RAC_Label
        ref={ref}
        className={cn(
          labelVariants({ invalid, required, disabled }),
          className
        )}
        {...props}
      />
    );
  }
);

Label.displayName = 'Label';

export default Label;
export type { LabelProps };
