import {
  Switch as RACSwitch,
  type SwitchProps as RACSwitchProps,
} from 'react-aria-components';

import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

interface SwitchProps
  extends RACSwitchProps,
    VariantProps<typeof switchVariants> {}

const switchVariants = cva(
  [
    'flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
    /* Focus Visible */
    'group-data-[focus-visible]:outline-none group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-ring group-data-[focus-visible]:ring-offset-2 group-data-[focus-visible]:ring-offset-background',
    /* Disabled */
    'group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-50',
    /* Selected */
    'bg-input group-data-[selected]:bg-primary',
    /* Readonly */
    'group-data-[readonly]:cursor-default',
    /* Resets */
    'focus-visible:outline-none',
    /* knob */
    'before:pointer-events-none before:block before:rounded-full before:bg-background before:shadow-lg before:ring-0 before:transition-transform',
    /* Selected */
    'before:translate-x-0',
  ],
  {
    variants: {
      size: {
        sm: 'h-4 w-7 before:group-data-[selected]:translate-x-3 before:size-3',
        md: 'h-5 w-9 before:group-data-[selected]:translate-x-4 before:size-4',
        lg: 'h-6 w-11 before:group-data-[selected]:translate-x-5 before:size-5',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

const Switch = ({ children, className, size, ...props }: SwitchProps) => (
  <RACSwitch
    className={cn(
      'group inline-flex items-center gap-2 font-medium data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 text-sm leading-none',
      className
    )}
    {...props}
  >
    <>
      <div className={cn(switchVariants({ size }))}></div>
      {children}
    </>
  </RACSwitch>
);

export default Switch;
export type { SwitchProps };
