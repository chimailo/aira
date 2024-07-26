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
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70',
  {
    variants: {
      error: {
        false: '',
        true: 'text-danger',
      },
    },
    defaultVariants: {
      error: false,
    },
  }
);

const Label = React.forwardRef(
  (props: LabelProps, ref: ForwardedRef<HTMLLabelElement>) => {
    const { error, className } = props;

    return (
      <RAC_Label
        ref={ref}
        className={cn(labelVariants({ error }), className)}
        {...props}
      />
    );
  }
);

Label.displayName = 'Label';

export default Label;
export type { LabelProps };
