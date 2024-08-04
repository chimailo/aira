import { ChevronDown, ChevronUp } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/lib/button';
import {
  FieldGroup,
  Input,
  type FieldGroupProps,
} from '@/components/lib/utils';

function StepperButton({ className, children, ...props }: ButtonProps) {
  return (
    <Button
      variant="text"
      icon
      intent="secondary"
      size="xs"
      className={cn(
        'grow rounded-none text-muted-foreground w-5 border-inherit h-5',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

const NumberInput = ({ variant, className, ...props }: FieldGroupProps) => {
  return (
    <FieldGroup variant={variant} className={cn('group', className)} {...props}>
      <Input tabIndex={-1} />
      <div className="grid border-l border-inherit">
        <StepperButton slot="increment" className="border-b">
          <ChevronUp aria-hidden className="size-4"></ChevronUp>
        </StepperButton>
        <StepperButton slot="decrement" className="border-t">
          <ChevronDown aria-hidden className="size-4"></ChevronDown>
        </StepperButton>
      </div>
    </FieldGroup>
  );
};

export { NumberInput, StepperButton };
