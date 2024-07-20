import { Delete } from 'lucide-react';
import Button from '../Button';

export function IconSizesButtons() {
  return (
    <div className="flex items-center gap-6">
      <Button icon size="xs">
        <Delete />
      </Button>
      <Button icon size="sm">
        <Delete />
      </Button>
      <Button icon size="md">
        <Delete />
      </Button>
      <Button icon size="lg">
        <Delete />
      </Button>
      <Button icon size="xl">
        <Delete />
      </Button>
    </div>
  );
}
