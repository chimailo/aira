import { type VariantProps } from 'class-variance-authority';
import {
  Button,
  type ButtonProps as RA_ButtonProps,
} from 'react-aria-components';

import { cn } from '@/lib/utils';
import buttonVariants from './variants.ts';

export interface ButtonProps
  extends RA_ButtonProps,
    VariantProps<typeof buttonVariants> {}

export default function ({
  className,
  variant,
  intent,
  size,
  icon,
  round,
  ...props
}: ButtonProps) {
  return (
    <Button
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
