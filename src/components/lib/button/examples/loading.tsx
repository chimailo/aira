import { LoaderCircle } from 'lucide-react';
import Button from '../Button';

export function LoadingButtons() {
  return (
    <div className="flex items-center gap-6">
      <Button isDisabled intent="secondary">
        <LoaderCircle className="animate-spin" />
      </Button>
      <Button variant="outlined" isDisabled>
        <LoaderCircle className="animate-spin" />
        Loading
      </Button>
    </div>
  );
}
