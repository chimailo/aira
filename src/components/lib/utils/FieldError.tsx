import { forwardRef, type ForwardedRef } from 'react';
import {
  FieldError as RACFieldError,
  type FieldErrorProps,
} from 'react-aria-components';

import { cn } from '@/lib/utils';

const FieldError = forwardRef(
  (
    { className, ...props }: FieldErrorProps,
    ref: ForwardedRef<HTMLSpanElement>
  ) => {
    return (
      <RACFieldError
        ref={ref}
        className={cn('text-xs block font-medium text-danger', className)}
        {...props}
      />
    );
  }
);

FieldError.displayName = 'FieldError';

export default FieldError;
