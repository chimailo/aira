import { Delete } from 'lucide-react';
import Button from '../Button';

export function OutlinedButtons() {
  return (
    <div className="flex items-center gap-6">
      <Button variant="outlined">Primary</Button>
      <Button variant="outlined" isDisabled>
        Disabled
      </Button>
      <Button variant="outlined">
        <Delete />
        Delete
      </Button>
    </div>
  );
}
