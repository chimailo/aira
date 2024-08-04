import { forwardRef } from 'react';
import { Input as RACInput, type InputProps } from 'react-aria-components';

import { cn } from '@/lib/utils';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <RACInput
        ref={ref}
        className={cn(
          'min-w-0 flex-1 bg-background p-2 outline outline-0 placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
export type { InputProps };
