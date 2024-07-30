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

const labelVariants = cva([
  'text-sm font-medium leading-none',
  /* Disabled */
  'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70',
  /* Invalid */
  'group-data-[invalid]:text-danger',
]);

const Label = React.forwardRef(
  (props: LabelProps, ref: ForwardedRef<HTMLLabelElement>) => {
    const { className } = props;

    return (
      <RAC_Label
        ref={ref}
        className={cn(labelVariants(), className)}
        {...props}
      />
    );
  }
);

Label.displayName = 'Label';

export default Label;
export type { LabelProps };
