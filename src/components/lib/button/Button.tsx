import React, { type ForwardedRef } from 'react';
import { type VariantProps } from 'class-variance-authority';
import {
  Button as RA_Button,
  type ButtonProps as RA_ButtonProps,
} from 'react-aria-components';

import { cn } from '@/lib/utils';
import buttonVariants from './variants.ts';

interface ButtonProps
  extends RA_ButtonProps,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { className, variant, intent, size, icon, round } = props;

    return (
      <RA_Button
        ref={ref}
        className={(values) =>
          cn(
            buttonVariants({
              variant,
              intent,
              size,
              icon,
              round,
              className:
                typeof className === 'function' ? className(values) : className,
            })
          )
        }
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
export type { ButtonProps };
