import { cva } from 'class-variance-authority';

export default cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded text-sm/6 font-medium ring-offset-background transition-colors disabled:pointer-events-none disabled:opacity-50 data-[focused]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2',
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
        danger: '',
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
          'border-primary text-primary hover:bg-primary/10 active:bg-primary/20 dark:hover:bg-primary/5 dark:border-primary-700/70 dark:hover:border-primary dark:text-primary-700',
      },
      {
        intent: 'primary',
        variant: 'text',
        class:
          'hover:bg-primary-100 text-primary-700 dark:hover:bg-primary-900/50 dark:text-primary-200',
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
        class:
          'border-gray-300 hover:border-gray-300 text-foreground hover:bg-gray-200/50 active:bg-gray-300 dark:hover:bg-gray-800/5 dark:border-gray-800/70 dark:hover:border-gray-800 dark:active:bg-gray-800/30',
      },
      {
        intent: 'secondary',
        variant: 'text',
        class:
          'hover:bg-gray-200 active:bg-gray-300 text-foreground dark:hover:bg-gray-900/50 dark:active:bg-gray-900/30',
      },
      {
        intent: 'danger',
        variant: 'filled',
        class:
          'bg-danger text-danger-foreground hover:bg-danger/90 active:bg-danger/85',
      },
      {
        intent: 'danger',
        variant: 'outlined',
        class:
          'border-red-600 text-red-600 hover:bg-red-50 active:bg-red-100 dark:border-red-700/50 dark:hover:border-red-700/80 dark:hover:bg-red-600/10 dark:active:bg-red-700/30 dark:text-red-800',
      },
      {
        intent: 'danger',
        variant: 'text',
        class:
          'text-red-700 dark:text-red-800 hover:bg-danger/10 active:bg-danger/20',
      },
      { icon: true, size: 'xs', class: 'w-7 h-7 text-base leading-none' },
      { icon: true, size: 'sm', class: 'w-8 h-8 text-lg leading-none' },
      { icon: true, size: 'md', class: 'w-9 h-9 text-xl leading-none' },
      { icon: true, size: 'lg', class: 'w-10 h-10 text-[22px] leading-none' },
      { icon: true, size: 'xl', class: 'w-12 h-12 text-2xl leading-none' },
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
