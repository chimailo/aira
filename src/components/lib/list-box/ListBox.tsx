import {
  ListBox as RACListBox,
  ListBoxItem as RACListBoxItem,
  type ListBoxProps,
  type ListBoxItemProps,
} from 'react-aria-components';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';

function ListBox<T extends object>({ className, ...props }: ListBoxProps<T>) {
  return (
    <RACListBox
      className={cn(
        'group overflow-auto rounded-md border bg-background p-1 text-foreground shadow-sm max-w-sm outline-none max-h-80',
        /* Empty */
        'data-[empty]:p-6 data-[empty]:text-center data-[empty]:text-sm',
        className
      )}
      {...props}
    />
  );
}

const ListBoxItem = <T extends object>({
  className,
  children,
  ...props
}: ListBoxItemProps<T>) => {
  return (
    <RACListBoxItem
      textValue={
        props.textValue ?? (typeof children === 'string' ? children : undefined)
      }
      className={cn(
        'relative flex w-full select-none rounded-sm px-2 py-1.5 text-sm outline-none gap-3',
        /* Disabled */
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        /* Focused */
        'data-[focused]:bg-secondary/50',
        /* Hovered */
        'data-[hovered]:bg-secondary/50',
        className
      )}
      {...props}
    >
      {({ isSelected, selectionMode }) => (
        <>
          {selectionMode === 'multiple' && (
            <span
              className={cn(
                'grid size-4 shrink-0 place-items-center rounded-sm border text-current ring-offset-background transition-colors translate-y-1',
                {
                  'bg-primary border-primary text-primary-foreground':
                    isSelected,
                }
              )}
            >
              {isSelected && <Check className="size-4" />}
            </span>
          )}
          {children}
        </>
      )}
    </RACListBoxItem>
  );
};

export { ListBox, ListBoxItem };
export type { ListBoxProps, ListBoxItemProps };
