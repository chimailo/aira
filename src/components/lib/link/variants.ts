import { cva } from 'class-variance-authority';

export default cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded text-sm/6 font-medium ring-offset-background transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[focused]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2',
  {
    variants: {
      variant: {
        filled: '',
        outlined: 'border',
        text: '',
      },
      intent: {
        primary: '',
        secondary: '',
      },
      size: {
        xs: 'px-1.5 py-1 text-xs',
        sm: 'px-2.5 py-1 text-[13px]/6',
        md: 'px-4 py-1.5',
        lg: 'px-[22px] py-2 text-base/6',
        xl: 'px-7 py-2.5 text-lg',
      },
      icon: {
        false: '',
        true: 'p-0',
      },
      round: {
        false: '',
        true: 'rounded-full',
      },
    },
    compoundVariants: [
      {
        intent: 'primary',
        variant: 'filled',
        class:
          'bg-primary hover:bg-primary/90 active:bg-primary/85 text-primary-foreground',
      },
      {
        intent: 'primary',
        variant: 'outlined',
        class:
          'border-primary text-primary hover:bg-primary/10 active:bg-primary/20',
      },
      {
        intent: 'primary',
        variant: 'text',
        class: 'text-primary bg-gradient-to-r from-current to-current bg-no-repeat bg-left-bottom bg-[length:0%_1px] hover:bg-[length:100%_1px] transition-[background-size] leading-tight p-0',
      },
      {
        intent: 'secondary',
        variant: 'filled',
        class:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/85',
      },
      {
        intent: 'secondary',
        variant: 'outlined',
        class: 'border-border text-secondary-foreground hover:bg-secondary/50 active:bg-secondary/60',
      },
      {
        intent: 'secondary',
        variant: 'text',
        class: 'text-secondary-foreground bg-gradient-to-r from-current to-current bg-no-repeat bg-left-bottom bg-[length:0%_1px] hover:bg-[length:100%_1px] transition-[background-size] leading-tight p-0',
      },
      { icon: true, size: 'xs', class: 'size-7' },
      { icon: true, size: 'sm', class: 'size-8' },
      { icon: true, size: 'md', class: 'size-9' },
      { icon: true, size: 'lg', class: 'size-10' },
      { icon: true, size: 'xl', class: 'size-12' },
    ],
    defaultVariants: {
      variant: 'filled',
      size: 'md',
      intent: 'primary',
      icon: false,
      round: false,
    },
  }
);
