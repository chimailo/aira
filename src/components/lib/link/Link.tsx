import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import {
  Link as RA_Link,
  type LinkProps as RA_LinkProps,
  type LinkRenderProps,
} from 'react-aria-components';

import { cn } from '@/lib/utils';
import buttonVariants from '@/components/lib/link/variants.ts';

interface LinkProps extends RA_LinkProps, VariantProps<typeof buttonVariants> {}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, intent, variant, size, icon, round, ...props }, ref) => {
    return (
      <RA_Link
        ref={ref}
        className={(values: LinkRenderProps) =>
          cn(
            buttonVariants({
              variant,
              intent,
              size,
              icon,
              round,
              className:
                typeof className === 'function'
                  ? className({ ...values, defaultClassName: undefined })
                  : className,
            })
          )
        }
        {...props}
      />
    );
  }
);

Link.displayName = 'Link';

export default Link;
export type { LinkProps };
