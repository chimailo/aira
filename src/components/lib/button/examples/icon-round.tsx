import { Delete } from 'lucide-react';
import Button from '../Button';

export function RoundedIconButtons() {
  return (
    <div className="flex items-center gap-6">
      <Button icon round size="xs">
        <Delete />
      </Button>
      <Button icon round size="sm">
        <Delete />
      </Button>
      <Button icon round size="md">
        <Delete />
      </Button>
      <Button icon round size="lg">
        <Delete />
      </Button>
      <Button icon round size="xl">
        <Delete />
      </Button>
    </div>
  );
}
