import { forwardRef } from 'react';
import { Text, type TextProps } from 'react-aria-components';

import { cn } from '@/lib/utils';

const FieldDescription = forwardRef<HTMLSpanElement, TextProps>(
  ({ className, ...props }, ref) => {
    return (
      <Text
        ref={ref}
        slot="description"
        className={cn(
          'text-xs block font-medium text-muted-foreground',
          className
        )}
        {...props}
      />
    );
  }
);

FieldDescription.displayName = 'FieldDescription';

export default FieldDescription;
export type { TextProps as FieldDescriptionProps };
