import { Search, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/lib/button';
import {
  FieldGroup,
  Input,
  type FieldGroupProps,
} from '@/components/lib/utils';

function ClearButton({ className, children, ...props }: ButtonProps) {
  return (
    <Button
      variant="text"
      icon
      intent="secondary"
      size="xs"
      className={cn(
        'rounded-sm opacity-70 ring-offset-background transition-opacity',
        /* Hover */
        'data-[hovered]:opacity-100',
        /* Disabled */
        'data-[disabled]:pointer-events-none',
        /* Empty */
        'group-data-[empty]:invisible',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

const SearchInput = ({ variant, className, ...props }: FieldGroupProps) => {
  return (
    <FieldGroup
      variant={variant}
      className={cn('px-2 items-center group', className)}
      {...props}
    >
      <Search aria-hidden className="size-5 text-muted-foreground"></Search>
      <Input tabIndex={-1} placeholder="Search..." />
      <ClearButton slot="clear">
        <X aria-hidden className="size-4"></X>
      </ClearButton>
    </FieldGroup>
  );
};

export default SearchInput;
