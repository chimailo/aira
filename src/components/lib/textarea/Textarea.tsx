import React, { type ForwardedRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  TextArea as AriaTextArea,
  type TextAreaProps as AriaTextAreaProps,
} from 'react-aria-components';

import { cn } from '@/lib/utils';

interface TextAreaProps
  extends AriaTextAreaProps,
    VariantProps<typeof textareaVariants> {}

const textareaVariants = cva(
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

const TextArea = React.forwardRef(
  (props: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const { stretch, state, className } = props;

    return (
      <AriaTextArea
        ref={ref}
        className={cn(textareaVariants({ state, stretch }), className)}
        {...props}
      />
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
export type { TextAreaProps };
