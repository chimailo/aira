import { Group, type GroupProps } from 'react-aria-components';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const fieldGroupVariants = cva(
  'flex w-full rounded border bg-background items-center text-sm ring-offset-background transition-colors placeholder:text-input data-[focus-within]:outline-none data-[focus-within]:ring-2 data-[focus-within]:ring-ring data-[focus-within]:ring-offset-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[disabled]:pointer-events-none data-[invalid]:border-danger/70 hover:data-[invalid]:border-danger',
  {
    variants: {
      variant: {
        neutral: 'border-input hover:border-muted-foreground',
        primary: 'border-primary/70 hover:border-primary',
        success: 'border-success/70 hover:border-success',
      },
    },
    defaultVariants: {
      variant: 'neutral',
    },
  }
);

interface FieldGroupProps
  extends GroupProps,
    VariantProps<typeof fieldGroupVariants> {}

function FieldGroup({ className, variant, ...props }: FieldGroupProps) {
  return (
    <Group
      className={cn(fieldGroupVariants({ variant }), className)}
      {...props}
    />
  );
}

export default FieldGroup;
export type { FieldGroupProps };
