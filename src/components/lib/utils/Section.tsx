import {
  Section as RACSection,
  type SectionProps,
} from 'react-aria-components';

import { cn } from '@/lib/utils';

function Section<T extends object>({ className, ...props }: SectionProps<T>) {
  return <RACSection className={cn('mt-2 first:mt-0', className)} {...props} />;
}

export default Section;
export type { SectionProps };
